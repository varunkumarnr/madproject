import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { Product } from "../components/Product.js";
import { getProducts } from "../services/ProductsService.js";

export function ProductsList({ navigation }) {
  function renderProduct({ item: product }) {
    return (
      <Product
        {...product}
        onPress={() => {
          navigation.navigate("ProductDetails", {
            productId: product.id
          });
        }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function renderItem() {
    return <Text style={styles.name}>made by varun, ashwin,vinay</Text>;
  }
  return (
    <View>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={item => item.id.toString()}
        data={products}
        renderItem={renderProduct}
        ListFooterComponent={renderItem}
      />
    </View>
  );
  return <view></view>;
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee"
  },
  name: {
    fontSize: 16,
    fontWeight: "400"
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8
  }
});
