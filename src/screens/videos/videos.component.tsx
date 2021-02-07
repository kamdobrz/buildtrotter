import React, {Component, ReactElement} from 'react';
import {Button, SafeAreaView, ScrollView, Text} from 'react-native';
import VideosService from '../../services/videos.service';
import {CommonVideosProps} from './videos.interface';
import {VideoEventsEmitterEnum} from '../../enums/videos.enum';
import {FRIEND_UUID, MY_UUID} from '../../_mocks/uuids.mock';

class CommonVideosScreen extends Component<CommonVideosProps> {
    private readonly videoService = VideosService.getInstance();
    public state = {
        ids: []
    };

    public componentDidMount(): void {
        this.videoService.eventEmitter.addListener<string[]>(
            VideoEventsEmitterEnum.DOCUMENT_PAIR_ID_SNAPHOT,
            this.setVideoIds
        );
    }

    private readonly setVideoIds = (ids: string[]): void => {
        this.setState({ids});
    };

    public componentWillUnmount(): void {
        this.videoService.eventEmitter.removeListener(this.setVideoIds);
    }

    public setPairDocument = async(): Promise<void> => {
        // TODO:
        // create bluetooth connection
        // TODO: handle devices UUID
        const myUUID = MY_UUID;
        const friendUUID = FRIEND_UUID;
        const pairID = [myUUID, friendUUID].sort().join('');
        this.videoService.pairId = pairID;
        this.videoService.subscribeToCommonVideos();
    };

    public addId = async(): Promise<void> => {
        // for testing purposes
        this.videoService.addCommonVideoId(Math.random().toString());
    };

    public render(): ReactElement {
        return <SafeAreaView>
            <Button title={'add id'} onPress={this.addId} />
            <Button title={'set pair document'} onPress={this.setPairDocument} />
            <ScrollView bounces={false}>
            {this.state.ids.map((id: string): ReactElement =>
                <Text key={id}>
                    {id}
                </Text>
            )}
            </ScrollView>
        </SafeAreaView>;
    }
}

export default CommonVideosScreen;
