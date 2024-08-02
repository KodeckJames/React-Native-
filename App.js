import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
const logoImg = require("./assets/adaptive-icon.png")

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image source={logoImg} style={styles.image} />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, rerum. Quasi reiciendis ea veritatis vitae laudantium sequi eos harum voluptates, sit explicabo neque est molestias distinctio, voluptatem voluptas laborum nam.
        Odio id sit molestiae deserunt libero. Et consequuntur temporibus suscipit perspiciatis non fuga voluptas odit obcaecati eaque cumque, dolorem corporis reprehenderit iste at vero commodi voluptate consequatur. Obcaecati, consequatur illo!
        Doloremque perferendis non modi excepturi enim mollitia saepe ea rem, exercitationem unde eum ab, velit eos! Nam delectus, magni accusamus quis incidunt molestias a reiciendis, minus velit reprehenderit veritatis dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi itaque ullam suscipit nam sapiente minima sint delectus blanditiis ipsa, dolor quos eum, expedita eveniet totam illum amet similique possimus commodi.
        Repellat reiciendis fuga aliquid! Minima, rerum architecto? Eius quaerat molestiae nemo nulla veritatis labore quis voluptas deserunt possimus. Sed id eum numquam non ipsum aliquid expedita quas hic laboriosam ea.
        Commodi voluptas similique, recusandae consequatur quae minus atque nesciunt quia a? Consequuntur voluptas magni rem praesentium quis esse delectus, at suscipit, eligendi iste ex maiores libero iusto magnam perspiciatis sit.
        Praesentium nisi id maxime veritatis deleniti. Dolores accusantium deleniti corporis, debitis magnam ex amet consequatur architecto tempore aliquam iste at sint consequuntur officiis fugit facere, maxime, nulla ullam suscipit alias.
        
      </Text>
        <Image source={logoImg} style={styles.image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    padding:60
    
  },
  image: {
    width: 300,
    height: 300,
  },
  view3: {
    width: 200,
    height: 200,
    backgroundColor:'lightgreen'
  }
});
