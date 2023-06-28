/* eslint-disable react/react-in-jsx-scope */
import {FlatList} from 'react-native';
import FeedPost from '../../components/FeedPost.Component/FeedPost';
import posts from '../../assets/data/posts.json';

const Homescreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Homescreen;
