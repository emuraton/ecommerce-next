import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  position: relative;
  color: #37454d;
  overflow: visible;
  text-align: center;
  width: 33%;
  float: left;
  text-align: left;
`;
ListItem.displayName = 'ListItem';

const Icon = styled.span`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 12px 0 0;
`;

const IconLabel = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  font-weight: 500;
  color: rgb(72, 72, 72);
  font-size: 16px;
  line-height: 25px;
`;

const Container = styled.div`
  margin-top: 10px;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const ShowMoreButton = styled.button`
  background: transparent;
  color: rgb(0, 132, 137);
  border: none;
  text-decoration: none;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
`;
ShowMoreButton.displayName = 'ShowMoreButton';

const Amenities = {
  Container,
  ShowMoreButton,
  Icon,
  IconLabel,
  List,
  ListItem,
};

export default Amenities;
