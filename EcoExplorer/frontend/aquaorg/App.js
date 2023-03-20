import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DefaultTheme,
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { useEffect, useMemo, useState } from "react";
import { AuthContext } from "./context/context";

import Login from "./screens/auth/Login";
import Registration from "./screens/auth/Registration";
import ResetPassword from "./screens/auth/ResetPassword";
import Donation from "./screens/Donation";
import Event from "./screens/Event";
import Home from "./screens/Home";
// import Info from "./screens/Info";
import Splash from "./screens/other/Splash";
import QuestionAndAnswers from "./screens/QuestionAndAnswers";
import Profile from "./screens/user/Profile";
import Settings from "./screens/user/Settings";
import Page1 from "./screens/welcome/Page1";
import Page2 from "./screens/welcome/Page2";
import Page3 from "./screens/welcome/Page3";
import Page4 from "./screens/welcome/Page4";
import Page5 from "./screens/welcome/Page5";

import AddEvent from "./screens/events/AddEvent";
import AllEvents from "./screens/events/AllEvents";
import YourEvents from "./screens/events/YourEvents";
import InterestedEvents from "./screens/events/InterestedEvents";
import ViewEvent from "./screens/events/ViewEvent";
import ViewEventUser from "./screens/events/ViewEventUser";
import EditEvent from "./screens/events/EditEvent";
import EventInfo from "./screens/events/EventInfo";

import { QuickAnswer, QuickQAEnd, QuickQAHome, QuickQuestion } from "./screens/questionAndAnswers/quickQA";
import { Previous, PreviousQAHome } from "./screens/questionAndAnswers/previousQA";
import { ScoreBoard, ScoreBoardQAHome } from "./screens/questionAndAnswers/scoreBoardQA";
import { login, registration } from "./api";

import InfoHome from "./screens/Information Management/Home";
import InfoCategories from "./screens/Information Management/Categories";
import InfoSeaAnimal from "./screens/Information Management/SeaAnimal";
import BlueWhale from "./screens/Information Management/BlueWhale/BlueWhale";
import BlueWhaleIntroduction from "./screens/Information Management/BlueWhale/Introduction";
import BlueWhaleInformation from "./screens/Information Management/BlueWhale/Information";
import BlueWhaleHologram from "./screens/Information Management/BlueWhale/Hologram";
import BlueWhaleExplore from "./screens/Information Management/BlueWhale/Explore";

import AddInfoHome from "./screens/Information Management/UserAddInfo/WantAddInfo";
import AddInfoCreate from "./screens/Information Management/UserAddInfo/AddInfo_SeaAnimal";
import AddInfoViewAll from "./screens/Information Management/UserAddInfo/ViewAll_Info";
import AddInfoViewEach from "./screens/Information Management/UserAddInfo/ViewEach_Info";
import AddInfoUpdate from "./screens/Information Management/UserAddInfo/UpdateInfo";
import LogOut from "./screens/auth/LogOut";


import AddDonation from "./screens/DonationManagement/AddDonation";
import RecurringDonation from "./screens/DonationManagement/RecurringDonation";
import OneTimeDonation from "./screens/DonationManagement/OneTimeDonation";
import AddDetails from "./screens/DonationManagement/AddDetails";


//internal styling
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const Drawer = createDrawerNavigator();
const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackEvent = createStackNavigator();

const HomeScreens = () => (
  <Bottom.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="First_Home"
  >
    <Bottom.Screen name="Profile" component={Profile} />
    <Bottom.Screen name="First_Home" component={Home} />
    <Bottom.Screen name="Settings" component={Settings} />
  </Bottom.Navigator>
);

const EventScreens = () => (
  <StackEvent.Navigator initialRouteName="EventSC">
    <StackEvent.Screen
      name="EventSC"
      component={Event}
      options={{ headerShown: false }}
    />
    <StackEvent.Screen
      name="AddEvent"
      component={AddEvent}
      options={{ title: "Add Event" }}
    />

    <StackEvent.Screen
      name="AllEvents"
      component={AllEvents}
      options={{ title: "All Events" }}
    />
    <StackEvent.Screen
      name="YourEvents"
      component={YourEvents}
      options={{ title: "Your Events" }}
    />
    <StackEvent.Screen
      name="InterestedEvents"
      component={InterestedEvents}
      options={{ title: "Interested Events" }}
    />
    <StackEvent.Screen
      name="ViewEvent"
      component={ViewEvent}
      options={{ title: "Event" }}
    />
    <StackEvent.Screen
      name="ViewEventUser"
      component={ViewEventUser}
      options={{ title: "Event" }}
    />
    <StackEvent.Screen
      name="EditEvent"
      component={EditEvent}
      options={{ title: "Edit Event" }}
    />
    <StackEvent.Screen
      name="EventInfo"
      component={EventInfo}
      options={{ title: "About Events" }}
    />
  </StackEvent.Navigator>
);

const QuestionAnswerScreens = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="QuestionAndAnswersSrc">
    <Stack.Screen name="QuestionAndAnswersSrc" component={QuestionAndAnswers} options={{ headerShown: false }} />
    <Stack.Screen name="QuickQAHome" component={QuickQAHome} options={{ title: "Quick Q & A" }} />
    <Stack.Screen name="QuickQuestion" component={QuickQuestion} options={{ title: "Quick Question" }} />
    <Stack.Screen name="QuickQAEnd" component={QuickQAEnd} options={{ title: "Quick Q & A End" }} />
    <Stack.Screen name="QuickAnswer" component={QuickAnswer} options={{ title: "Quick Answer" }} />
    <Stack.Screen name="PreviousQAHome" component={PreviousQAHome} options={{ title: "Previous Q & A" }} />
    <Stack.Screen name="Previous" component={Previous} options={{ title: "Previous" }} />
    <Stack.Screen name="ScoreBoardQAHome" component={ScoreBoardQAHome} options={{ title: "Scoreboard Q & A" }} />
    <Stack.Screen name="ScoreBoard" component={ScoreBoard} options={{ title: "Scoreboard" }} />
  </Stack.Navigator>
);

const InformationScreens = () => (
  <Stack.Navigator initialRouteName="InformationSrc">
    {/* <Stack.Screen name="InformationSrc" component={Info} options={{ headerShown: false }} /> */}
    <Stack.Screen name="InformationSrc" component={InfoHome} options={{ headerShown: false }} />
    <Stack.Screen name="InfoCategories" component={InfoCategories} options={{ title: "Categories" }} />
    <Stack.Screen name="InfoSeaAnimal" component={InfoSeaAnimal} options={{ headerShown: false }} />
    <Stack.Screen name="BlueWhale" component={BlueWhale} options={{ headerShown: false }} />
    <Stack.Screen name="BlueWhaleIntroduction" component={BlueWhaleIntroduction} options={{ title: "Introduction" }} />
    <Stack.Screen name="BlueWhaleInformation" component={BlueWhaleInformation} options={{ title: "Information" }} />
    <Stack.Screen name="BlueWhaleHologram" component={BlueWhaleHologram} options={{ title: "Hologram" }} />
    <Stack.Screen name="BlueWhaleExplore" component={BlueWhaleExplore} options={{ title: "Explore" }} />

    {/* Add Information */}
    <Stack.Screen name="AddInfoHome" component={AddInfoHome} options={{ headerShown: false }} />
    <Stack.Screen name="AddInfoCreate" component={AddInfoCreate} options={{ headerShown: false }} />
    <Stack.Screen name="AddInfoViewAll" component={AddInfoViewAll} options={{ title: "Added Information" }} />
    <Stack.Screen name="AddInfoViewEach" component={AddInfoViewEach} options={{ title: "Added Each Information" }} />
    <Stack.Screen name="AddInfoUpdate" component={AddInfoUpdate} options={{ title: "Update Information" }} />


  </Stack.Navigator>
)

const DonationScreens = () => (
  <Stack.Navigator initialRouteName="DonationSrc">
    {/* <Stack.Screen name="InformationSrc" component={Info} options={{ headerShown: false }} /> */}
    <Stack.Screen name="DonationSrc" component={Donation} options={{ headerShown: false }} />
    <Stack.Screen name="AddDonation" component={AddDonation} options={{ title: "Donation Methods" }} />
    <Stack.Screen name="RecurringDonation" component={RecurringDonation} options={{ title: "Recurring Donations" }} />
    <Stack.Screen name="OneTimeDonation" component={OneTimeDonation} options={{ title: "One Time Donations" }} />
    <Stack.Screen name="AddDetails" component={AddDetails} options={{ title: "Enter the Details" }} />

  </Stack.Navigator>
)

export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  const [isLoading, setIsLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(null);
  const [loginSuccessData, setLoginSuccessData] = useState();
  const [loginErrorData, setLoginErrorData] = useState();
  const [loginIsSuccess, setLoginIsSuccess] = useState(false);
  const [loginsIsPending, setLoginIsPending] = useState(false);
  const [loginIsError, setLoginIsError] = useState(false);

  const [registrationSuccessData, setRegistrationSuccessData] = useState();
  const [registrationErrorData, setRegistrationErrorData] = useState();
  const [registrationIsSuccess, setRegistrationIsSuccess] = useState(false);
  const [registrationsIsPending, setRegistrationIsPending] = useState(false);
  const [registrationIsError, setRegistrationIsError] = useState(false);

  const authContext = useMemo(() => {
    return {
      login: (data) => {
        setIsLoading(true);
        setLoginIsPending(true);
        login(data)
          .then((response) => {
            console.log(response.data.result);
            setLoginSuccessData(response.data.result);
            setUserAuth(response.data.token);
            setIsLoading(false);
            setLoginIsPending(false);
            setLoginIsSuccess(true);
            alert("login Success");
          })
          .catch((err) => {
            console.log(err);
            setLoginErrorData(err.response);
            setIsLoading(false);
            setLoginIsPending(false);
            setLoginIsError(true);
            alert("login Fail");
          });
      },
      register: (data) => {
        console.log(data);
        setIsLoading(true);
        setRegistrationIsPending(true);
        registration(data)
          .then((response) => {
            console.log(response.data.result);
            setRegistrationSuccessData(response.data.result);
            setUserAuth(response.data.token);
            setIsLoading(false);
            setRegistrationIsPending(false);
            setRegistrationIsSuccess(true);
            alert("Registration Success");
          })
          .catch((err) => {
            console.log(err);
            setRegistrationErrorData(err.response);
            setIsLoading(false);
            setRegistrationIsPending(false);
            setRegistrationIsError(true);
            alert("Registration Fail");
          });
      },
      logout: () => {
        setIsLoading(false);
        setUserAuth(null);
      },
      userDetails: loginSuccessData
    };
  }, [loginSuccessData]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  if (isLoading) {
    return <Splash />;
  }

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {userAuth ? (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreens} />
            <Drawer.Screen
              name="InfoHome"
              component={InformationScreens}
              options={({ route }) => {
                // console.log(getFocusedRouteNameFromRoute(route))
                const routeName =
                  getFocusedRouteNameFromRoute(route) ?? "InformationSrc";

                if (typeof routeName == "undefined") return;
                if (
                  routeName == "InfoCategories" ||
                  routeName == "InfoSeaAnimal" ||
                  routeName == "BlueWhale" ||
                  routeName == "BlueWhaleIntroduction" ||
                  routeName == "BlueWhaleInformation" ||
                  routeName == "BlueWhaleHologram" ||
                  routeName == "BlueWhaleExplore" ||
                  routeName == "AddInfoHome" ||
                  routeName == "AddInfoCreate" ||
                  routeName == "AddInfoViewAll" ||
                  routeName == "AddInfoViewEach" ||
                  routeName == "AddInfoUpdate"
                )
                  return { headerShown: false }

                return { title: "Information" }
              }}
            />
            <Drawer.Screen
              name="QuestionAndAnswers"
              component={QuestionAnswerScreens}
              options={({ route }) => {
                // console.log(getFocusedRouteNameFromRoute(route));
                const routeName =
                  getFocusedRouteNameFromRoute(route) ??
                  "QuestionAndAnswersSrc";
                if (typeof routeName == "undefined") return;
                if (
                  routeName == "QuickQAHome" ||
                  routeName == "PreviousQAHome" ||
                  routeName == "ScoreBoardQAHome" ||
                  routeName == "QuickQuestion" ||
                  routeName == "QuickAnswer" ||
                  routeName == "Previous" ||
                  routeName == "ScoreBoard" ||
                  routeName == "QuickQAEnd"
                )
                  return { headerShown: false };
                return { title: "Question &  Answers" };
              }}
            />
            <Drawer.Screen
              name="Events"
              component={EventScreens}
              options={({ route }) => {
                // console.log("test", getFocusedRouteNameFromRoute(route));
                const routeName =
                  getFocusedRouteNameFromRoute(route) ?? "EventSc";
                if (typeof routeName == "undefined") return;
                if (
                  routeName == "AddEvent" ||
                  routeName == "AllEvents" ||
                  routeName == "YourEvents" ||
                  routeName == "InterestedEvents" ||
                  routeName == "ViewEvent" ||
                  routeName == "ViewEventUser" ||
                  routeName == "EditEvent" ||
                  routeName == "EventInfo"
                )
                  return { headerShown: false };
              }}
            />
            <Drawer.Screen
              name="Donation"
              component={DonationScreens}
              options={({ route }) => {
                // console.log(getFocusedRouteNameFromRoute(route))
                const routeName =
                  getFocusedRouteNameFromRoute(route) ?? "DonationSrc";

                if (typeof routeName == "undefined") return;
                if (
                  routeName == "AddDonation" ||
                  routeName == "RecurringDonation" ||
                  routeName == "OneTimeDonation" ||
                  routeName == "AddDetails"


                )
                  return { headerShown: false };
                return { title: "Donation Page" }
              }}
            />

            {/* <Drawer.Screen name="Donation" component={Donation} /> */}
            {/* <Drawer.Screen name="Donation" component={Donation} /> */}
            <Drawer.Screen name="Profile" component={Profile} options={{ title: "User Profile" }} />
            <Drawer.Screen name="LogOut" component={LogOut} options={{ title: "Log Out" }} />
          </Drawer.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Login"
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Bottom.Screen name="Page1" component={Page1} />
            <Bottom.Screen name="Page2" component={Page2} />
            <Bottom.Screen name="Page3" component={Page3} />
            <Bottom.Screen name="Page4" component={Page4} />
            <Bottom.Screen name="Page5" component={Page5} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
