import { ViewProps } from 'react-native';
import { AirbnbRatingProps, RatingProps } from 'react-native-ratings';
import { AccessoryProps } from '../avatar/Accessory';
import { AvatarProps } from '../avatar/Avatar';
import { BadgeProps } from '../badge/Badge';
import { BottomSheetProps } from '../bottomSheet/BottomSheet';
import { ButtonProps } from '../buttons/Button';
import { ButtonGroupProps } from '../buttons/ButtonGroup';
import { CardProps } from '../card/Card';
import { CheckBoxProps } from '../checkbox/CheckBox';
import { DividerProps } from '../divider/Divider';
import { HeaderProps } from '../header/Header';
import { IconProps } from '../icons/Icon';
import { ImageProps } from '../image/Image';
import { InputProps } from '../input/Input';
import { ListItemProps } from '../list/ListItem';
import { OverlayProps } from '../overlay/Overlay';
import { PricingCardProps } from '../pricing/PricingCard';
import { SearchBarProps } from '../searchbar/SearchBar';
import { SliderProps } from '../slider/Slider';
import { SocialIconProps } from '../social/SocialIcon';
import { TextProps } from '../text/Text';
import { TileProps } from '../tile/Tile';
import { TooltipProps } from '../tooltip/Tooltip';
import { SwitchProps } from '../switch/switch';
import colors, { Colors } from './colors';

export default {
  colors,
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface FullTheme {
  Avatar: Partial<AvatarProps>;
  Accessory: Partial<AccessoryProps>;
  Badge: Partial<BadgeProps>;
  BottomSheet: Partial<BottomSheetProps>;
  Button: Partial<ButtonProps>;
  ButtonGroup: Partial<ButtonGroupProps>;
  Card: Partial<CardProps>;
  CardDivider: Partial<DividerProps>;
  CardFeaturedSubtitle: Partial<TextProps>;
  CardFeaturedTitle: Partial<TextProps>;
  CardImage: Partial<ImageProps>;
  CardTitle: Partial<TextProps>;
  CheckBox: Partial<CheckBoxProps>;
  Divider: Partial<DividerProps>;
  Header: Partial<HeaderProps>;
  Icon: Partial<IconProps>;
  Image: Partial<ImageProps>;
  Input: Partial<InputProps>;
  ListItem: Partial<ListItemProps>;
  ListItemButtonGroup: Partial<ButtonGroupProps>;
  ListItemCheckBox: Partial<CheckBoxProps>;
  ListItemContent: Partial<ViewProps>;
  ListItemChevron: Partial<IconProps>;
  ListItemInput: Partial<InputProps>;
  ListItemSubtitle: Partial<TextProps>;
  ListItemTitle: Partial<TextProps>;
  Overlay: Partial<OverlayProps>;
  PricingCard: Partial<PricingCardProps>;
  Rating: Partial<RatingProps>;
  AirbnbRating: Partial<AirbnbRatingProps>;
  SearchBar: Partial<SearchBarProps>;
  Slider: Partial<SliderProps>;
  SocialIcon: Partial<SocialIconProps>;
  Text: Partial<TextProps>;
  Tile: Partial<TileProps>;
  Switch: Partial<SwitchProps>;
  Tooltip: Partial<TooltipProps>;
  colors: RecursivePartial<Colors>;
}

export type Theme<T = {}> = Partial<FullTheme> & T;
