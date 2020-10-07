import firestore, {DocumentData} from '@react-native-firebase/firestore';
import EventEmitter from 'react-native/Libraries/vendor/emitter/EventEmitter';
import {VideoEventsEmitterEnum} from '../enums/videos.enum';

export class VideosService {
    private readonly DOCUMENT_PAIR_ID = 'pairs';
    private _pairID = '';
    private _videoIds: string [] = [];
    private _eventEmitter = new EventEmitter();

    public getVideoIds = async(): Promise<string[]> => {
        const doc = await firestore()
            .collection(this.DOCUMENT_PAIR_ID)
            .doc(this._pairID)
            .get();

        const ids = doc.data()?.ids || [];
        return ids;
    };

    public subscribeToPairs = (): void => {
        firestore()
            .collection(this.DOCUMENT_PAIR_ID)
            .doc(this._pairID)
            .onSnapshot((doc: DocumentData): void => {
                const ids = doc.data()?.ids;

                if (!ids) {
                    return;
                }

                this._videoIds = ids;
                this._eventEmitter.emit(
                    VideoEventsEmitterEnum.DOCUMENT_PAIR_ID_SNAPHOT,
                    this._videoIds
                );
            })
    };

    get videoIds (): string[] {
        return this._videoIds;
    }

    get eventEmitter (): EventEmitter {
        return this._eventEmitter;
    }

    get pairId (): string {
        return this._pairID;
    }

    set pairId (value: string) {
        this._pairID = value;
    }

    public addVideoId = async(value: string): Promise<void> => {
        const ids = await this.getVideoIds();
        ids.push(value);

        await firestore()
            .collection(this.DOCUMENT_PAIR_ID)
            .doc(this._pairID)
            .set({ids})
    }
}
