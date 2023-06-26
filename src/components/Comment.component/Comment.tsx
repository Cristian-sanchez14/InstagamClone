import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './Comment.styles';
import colors from '../../theme/colors';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}

const Comment = ({comment}: ICommentProps) => {
  return (
    <>
      <Text>View all 16 comments</Text>
      <View style={styles.comment}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.user.username}</Text>
          {comment.comment}
        </Text>
        <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
      </View>
    </>
  );
};

export default Comment;
