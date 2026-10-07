import React from 'react';
import ExperienceDetails from '../components/ExperienceDetails';
import { items } from '../data/items';

export default function VirtualRealityScreen({ navigation }) {
  return <ExperienceDetails navigation={navigation} item={items.virtualReality} />;
}
