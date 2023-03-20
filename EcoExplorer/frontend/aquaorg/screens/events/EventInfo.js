import React, { useContext } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Title } from "react-native-paper";
import { FocusedStatusBar } from "../../components";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import { AuthContext } from "../../context/context";

const EventInfo = ({ navigation }) => {
  const { register } = useContext(AuthContext);

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView>
          <View style={{ flex: 1 }}>
            <ImageBackground
              source={assets.b3}
              resizeMode="cover"
              style={styles.image}
            >
              <Card elevation={5} style={styles.eventCard} mode={"elevated"}>
                <Card.Content>
                  <Title style={{ fontWeight: "bold", fontSize: 25 }}>
                    What is Events?
                  </Title>

                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "justify",
                      marginLeft: 10,
                    }}
                  >
                    This events section allows users to manage events though
                    this mobile application. Users can organize different types
                    of events to gather members and inform people.
                  </Text>
                </Card.Content>
              </Card>

              <Card elevation={5} style={styles.eventCard} mode={"elevated"}>
                <Card.Content>
                  <Title style={{ fontWeight: "bold", fontSize: 25 }}>
                    Functionalities
                  </Title>

                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "justify",
                      marginLeft: 10,
                    }}
                  >
                    User can add event to the system by add event functonality.
                    All the users can view available events via dashboard and by
                    events tab. Also this event management section allows views
                    to add events to their interested list.
                  </Text>
                </Card.Content>
              </Card>
              <Card elevation={5} style={styles.eventCard} mode={"elevated"}>
                <Card.Content>
                  <Title style={{ fontWeight: "bold", fontSize: 25 }}>
                    FAQ
                  </Title>

                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "left",
                      fontWeight: "bold",
                    }}
                  >
                    1. How to add event?
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "justify",
                      marginLeft: 10,
                      marginTop: 4,
                    }}
                  >
                    When you go to event dashboard, you can view event adding
                    functionality there.
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "left",
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    2. Can I remove event added by me ?
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      textAlign: "justify",
                      marginLeft: 10,
                      marginTop: 4,
                    }}
                  >
                    Yes, You can edit or remove event added by you.
                  </Text>
                </Card.Content>
              </Card>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EventInfo;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  eventCard: {
    backgroundColor: "#BCE6FF",
    marginVertical: 10,
    borderRadius: 23,
  },
});
