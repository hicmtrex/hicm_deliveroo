import { ScrollView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './category-card';
import client, { urlFor } from '../../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Cate Card */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imgUrl={urlFor(category.image).width(200).url()}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
