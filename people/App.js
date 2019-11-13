import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import PeoplePage from "./src/pages/PeoplePage";
import PeopleDetailPage from "./src/pages/PeopleDetailPage";
import { capitalizeFirstLetter } from "./src/util";

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: PeoplePage
    },
    PeopleDetail: {
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
        const peopleName = capitalizeFirstLetter(
          navigation.state.params.people.name.first
        );

        return {
          title: peopleName,
          headerTitleStyle: {
            color: "white",
            fontSize: 30
            //flexGrow: 1,
          }
        };
      }
    }
  },

  {
    defaultNavigationOptions: {
      title: "Pessoas!",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#6ca",
        borderBottomWidth: 1,
        borderBottomColor: "#c5c5c5"
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 30,
        //flexGrow: 1,
        alignSelf: "center"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
