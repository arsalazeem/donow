import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
import adMobIds from '../../admob/admob';
const adUnitId = adMobIds.adMobBannerUnitId;
const BannerAdComponent = () => {
  return (
    <BannerAd unitId={adUnitId} size={BannerAdSize.BANNER} />
  );
};

export default BannerAdComponent;
