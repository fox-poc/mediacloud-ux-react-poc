import { CollectionCards } from "@fox-poc/mediacloud-ux-styleguide-poc";

import { getRecentlyViewedChannels } from "@fox-poc/mediacloud-ux-sdk-poc";

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
