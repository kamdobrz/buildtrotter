import React, {Component, ReactElement} from 'react';
import {Button, ScrollView, Text, View} from 'react-native';
import {VideosService} from '../../services/videos.service';
import {VideosProps} from './videos.interface';
import {VideoEventsEmitterEnum} from '../../enums/videos.enum';

class VideosScreen extends Component<VideosProps> {
    private readonly videoService = new VideosService();
    public state = {
        ids: []
    };

    public componentDidMount(): void {
        this.videoService.eventEmitter.addListener(
            VideoEventsEmitterEnum.DOCUMENT_PAIR_ID_SNAPHOT,
            this.setVideoIds
        )
    }

    private readonly setVideoIds = (ids: string[]): void => {
        console.log('setVideoIds', ids);
        this.setState({ids})
    };

    public componentWillUnmount(): void {
        this.videoService.eventEmitter.removeListener(this.setVideoIds)
    }

    public setPairDocument = async(): Promise<void> => {
        const myUUID = 'b';
        const friendUUID = 'a';
        const pairID = [myUUID, friendUUID].sort().join('');
        this.videoService.pairId = pairID;
        this.videoService.subscribeToPairs();
    };

    public addId = async(): Promise<void> => {
        this.videoService.addVideoId(Math.random().toString());
    };

    public render(): ReactElement {
        return <View>
            <Button title={'add id'} onPress={this.addId} />
            <Button title={'set pair document'} onPress={this.setPairDocument} />
            <ScrollView bounces={false}>
            {this.state.ids.map((id: string): ReactElement =>
                <Text key={id}>{id}</Text>
            )}
            </ScrollView>
        </View>;
    }
};

export default VideosScreen;
