import { CollectionCards } from "@fox/mediacloud-ux-styleguide-poc";

import { getRecentlyViewedChannels } from "@fox/mediacloud-ux-sdk-poc";

import {
  HomePageSectionContainer,
  HomePageSectionHeaderContainer,
  HomePageSectionHeader,
} from "./home.styles";

export default function Router() {
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
