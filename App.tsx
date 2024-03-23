import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, TouchableOpacity } from "react-native";
import Blogs from "./src/pages/Blogs";
import BlogDetails from "./src/pages/BlogDetails";
import AddEditBlog from "./src/pages/AddEditBlog";
import BlogProvider from "./src/store/BlogProvider";
import { FontAwesome6, Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Blogs"
            component={Blogs}
            options={({ navigation }) => ({
              headerRight: () => {
                return (
                  <TouchableOpacity
                    style={{ marginRight: 20 }}
                    onPress={() => {
                      navigation.navigate("AddEditBlog");
                    }}
                  >
                    <FontAwesome6 name="add" size={24} color="black" />
                  </TouchableOpacity>
                );
              },
            })}
          />
          <Stack.Screen
            name="BlogDetails"
            component={BlogDetails}
            options={({ navigation,route }) => ({
              headerRight: () => (
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => {
                    navigation.navigate("AddEditBlog",{id: route.params.id});
                  }}
                >
                  <Feather name="edit-2" size={24} color="black" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="AddEditBlog" component={AddEditBlog} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
