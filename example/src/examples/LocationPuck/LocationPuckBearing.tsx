import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  MapView,
  Camera,
  UserTrackingMode,
  LocationPuck,
} from '@rnmapbox/maps';
import { ButtonGroup, Text } from '@rneui/base';

import { type ExampleWithMetadata } from '../common/ExampleMetadata';

const styles = { matchParent: { flex: 1 } };

const PUCK_BEARINGS: ('heading' | 'course')[] = ['heading', 'course'];

const LocationPuckBearing = () => {
  const [puckBearingIndex, setPuckBearingIndex] = useState(0);

  const puckBearing = PUCK_BEARINGS[puckBearingIndex];

  return (
    <SafeAreaView style={styles.matchParent}>
      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Bearing source
        </Text>
        <ButtonGroup
          buttons={PUCK_BEARINGS}
          selectedIndex={puckBearingIndex}
          onPress={(index) => setPuckBearingIndex(index)}
        />
      </View>
      <MapView style={styles.matchParent}>
        <Camera
          followUserLocation={true}
          followUserMode={UserTrackingMode.FollowWithHeading}
          followZoomLevel={16}
        />
        <LocationPuck
          puckBearingEnabled={true}
          puckBearing={puckBearing}
        />
      </MapView>
    </SafeAreaView>
  );
};

export default LocationPuckBearing;

const metadata: ExampleWithMetadata['metadata'] = {
  title: 'Location Puck Bearing',
  tags: [
    'LocationPuck',
    'LocationPuck#puckBearingEnabled',
    'LocationPuck#puckBearing',
  ],
  docs: `
Demonstrates LocationPuck bearing rotation via puckBearingEnabled and puckBearing.
`,
};
LocationPuckBearing.metadata = metadata;
