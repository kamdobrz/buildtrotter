import firestore, {DocumentData} from '@react-native-firebase/firestore';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import {VideoEventsEmitterEnum} from '../enums/videos.enum';
import {CollectionsEnum} from '../enums/collections.enum';

class VideosService {
    private static instance: VideosService | null = null;
    private _myID = '';
    private _pairID = '';
    private _videoIds: string[] = [];
    private _eventEmitter = new EventEmitter();

    public static getInstance(): VideosService {
        if (VideosService.instance === null) {
            VideosService.instance = new VideosService();
        }
        return this.instance as VideosService;
    }

    public getCommonVideoIds = async(): Promise<string[]> => {
        const doc = await firestore()
            .collection(CollectionsEnum.PAIRS)
            .doc(this._pairID)
            .get();

        const ids = doc.data()?.ids || [];
        return ids;
    };

    public subscribeToCommonVideos = (): void => {
        firestore()
            .collection(CollectionsEnum.PAIRS)
            .doc(this._pairID)
            .onSnapshot((doc: DocumentData): void => {
                const ids = doc?.data()?.ids;

                if (!ids) {
                    return;
                }

                this._videoIds = ids;
                this._eventEmitter.emit(
                    VideoEventsEmitterEnum.DOCUMENT_PAIR_ID_SNAPHOT,
                    this._videoIds
                );
            });
    };

    get videoIds (): string[] {
        return this._videoIds;
    }

    get eventEmitter (): EventEmitter {
        return this._eventEmitter;
    }

    get myId (): string {
        return this._myID;
    }

    set myId (value: string) {
        this._myID = value;
    }

    get pairId (): string {
        return this._pairID;
    }

    set pairId (value: string) {
        this._pairID = value;
    }

    public addCommonVideoId = async(id: string): Promise<void> => {
        await firestore()
            .collection(CollectionsEnum.PAIRS)
            .doc(this._pairID)
            .set({
                ids: firestore.FieldValue.arrayUnion(id)
            }, {merge: true});
    };

    public like = async(id: string): Promise<void> => {
        await firestore()
            .collection(CollectionsEnum.LIKED_VIDEOS)
            .doc(this._myID)
            .set({
                ids: firestore.FieldValue.arrayUnion(id)
            }, {merge: true});
    };

    public dislike = async(id: string): Promise<void> => {
        await firestore()
            .collection(CollectionsEnum.DISLIKED_VIDEOS)
            .doc(this._myID)
            .set({
                ids: firestore.FieldValue.arrayUnion(id)
            }, {merge: true});
    }
}

export default VideosService;
