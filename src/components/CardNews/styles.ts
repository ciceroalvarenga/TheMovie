import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.primary};
  height: auto;
  width: 100%;
  margin-bottom: 15px;
`;
export const ContainerContent = styled.View`
  width: 50%;
`;
export const ContainerNote = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.colors.iconActive};
  width: 70px;
  border-radius: 5px;
  height: 30px;
  padding: 2px;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
`;

export const IconConainerButton = styled.TouchableOpacity`
  align-items: flex-end;
  margin: 0px 0px 0px 10px;
  `;

export const StyledIcon = styled(Icon)`
  color: #fff;
  font-size: 35px;
`;

export const IconVote = styled(Icon)`
    color: ${({theme}) => theme.colors.background};
  font-size: 25px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 140px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`;
export const TextNote = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-weight: 700;
  font-size: 16px;
  margin-left: 5px;
`;
export const TextDate = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-weight: 700;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 10px;
`;