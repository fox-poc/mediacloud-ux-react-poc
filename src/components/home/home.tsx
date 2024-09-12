import { useEffect, useState } from "react";

import { CollectionCards } from "@fox/mediacloud-ux-styleguide-poc";

import { getRecentlyViewedChannels } from "@fox/mediacloud-ux-sdk-poc";

import {
  HomePageSectionBody,
  HomePageSectionContainer,
  HomePageSectionHeaderContainer,
  HomePageSectionHeader,
} from "./home.styles";

export default function Router(props) {
  const channelCards = getRecentlyViewedChannels();

  return (
    <HomePageSectionContainer>
      <HomePageSectionHeaderContainer>
        <HomePageSectionHeader>Recently Viewed Channels</HomePageSectionHeader>
      </HomePageSectionHeaderContainer>
      <CollectionCards items={channelCards} />
    </HomePageSectionContainer>
  );
}
