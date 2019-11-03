import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Config from 'react-native-config';

import { MarkerContainer, MarkerFill } from './styles';

MapboxGL.setAccessToken(Config.MAPBOX_TOKEN);

export default class App extends Component {
  componentDidMount() {
    MapboxGL.setTelemetryEnabled(false);
  }

  renderMarker = () => {
    const { latitude, longitude, eventName } = this.props;
    return (
      <MapboxGL.PointAnnotation
        id="event"
        coordinate={[longitude, latitude]}
        title={eventName}
      >
        <MarkerContainer>
          <MarkerFill />
        </MarkerContainer>
        <MapboxGL.Callout title={eventName} />
      </MapboxGL.PointAnnotation>
    );
  };

  render() {
    const { latitude, longitude } = this.props;
    return (
      <MapboxGL.MapView
        style={styles.container}
        styleURL={MapboxGL.StyleURL.Light}
      >
        <MapboxGL.Camera
          zoomLevel={15}
          centerCoordinate={[longitude, latitude]}
        />
        {this.renderMarker()}
      </MapboxGL.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
  },
});
