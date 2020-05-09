import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/src/screens/HomeScreen";
import ComponentsScreen from './src/src/screens/ComponentsScreen';
import ListScreen from './src/src/screens/ListScreen';
import ImageScreen from './src/src/screens/ImageScreen';
import CounterScreen from './src/src/screens/CounterScreen';
import ColorScreen from './src/src/screens/ColorScreen';
import SquareScreen_reducer from './src/src/screens/SquareScreen_reducer';
import TextScreen from './src/src/screens/TextScreen';
import BoxScreen from './src/src/screens/BoxScreen';

/*
1 DAY: BASICS
    setup
    components (4 pieces..)
    primitive elements
    JSX
    props
    "Hooks" (import new functionality to function type component)
2 DAY: DYNAMIC LIST
        FLATLIST element (mapping of array of elements)
        KEY or id (tracks the elements on the screen.. faster performance)
            Add keys in manually 
            keyExtractor

   HOMESCREEN AND NAVIGATION
        BUTTON primitive element
        TOUCHABLE OPACITY complex interactions
        PROPS
          Pass navigation props to HomeScreen.
    PROPS SYSTEM
        component that uses props for images and text
3 DAY: STATES IN COMPONENTS
        "3 questions: what piece of data changes, what type is it, what's the default"

        "NEVÖ CHANGE THE STATE VARIABLE VALUE MANUALLY!!!!!! >>>USE SET FUNCTIONS!!!!"

        "Generally add states to the parent!"

      CALLBACKS
          let children (components) change the state of parent.
          remember: when parent rerenders children rerender as well

      BONUS: REDUCER
          Because multiple very similar states & function are known.
          "function that manages changes to an object"
                  argument 1 has the states  {red:0, green:0, blue:0}   <<<never changed directly!!!
                  argument 2 has the updates {ColorToChange: 'Red', amount: 15}   <<<has to always return a value to argument1

4 DAY: MORE STATE MANAGEMENT, TEXTINPUT, LAYOUT SYSTEMS
          Setting up reduce.
          TEXT INPUT basics
              parents do not want to check what their children's state is
          LAYOUT SYSTEMS
                BOX
                  position stuff in a screen.
                FLEX BOX
                  Position stuff inside a box.
                POSITION
                  Override for unique position.
          




PROBLEMS & SOLUTIONS
debug step by step:
  use console.log
  check capitalization
  check semicolons etc.
  check faded stuff (not used..)

Have a break (or continue forward)


  Problem: logic not workin
  Solution: Step by step debugging and noticing a TYPO.

  P: image not working
  S: SMALL LETTER when importing

  P: logic not working..
  S: going forward and noticing that there was a TYPO


*/

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen_reducer,
    Text: TextScreen,
    Box: BoxScreen
  },




  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
