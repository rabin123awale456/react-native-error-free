import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';
import AboutScreen from '../screen/AboutScreen';

import SettingScreen from '../screen/SettingScreen';
import sidemenu from '../component/sidemenu';
// import wishlist from '../screen/WishList';


const StackNavigator1 = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
    // wishlist: wishlist
})
const DrawerNavigational = createDrawerNavigator(
    {
        Home: StackNavigator1,
        About: AboutScreen,
        Seeting: SettingScreen
    },
    {
        initialRouteName: 'Home',
        drawerWidth: 250,
        drawerPosition: 'left',
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentComponent: sidemenu
    }
)
export default createStackNavigator({
    MainRoute: DrawerNavigational
}, {
        headerMode: () => null
    })