import styled from 'styled-components';

import StarsList from '../StarsList';

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: rgb(0, 132, 137);
  margin-top: 0px;
  margin-bottom: 5px;
`;

const Distance = styled.span`
  font-weight: 500;
  color: rgb(72, 72, 72);
  margin-top: 5px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const FestivalName = styled.span`
  font-weight: 600;
  color: rgb(72, 72, 72);
  margin-top: 2px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 18px;
`;

const Container = styled.div`
  display: inline-block;
`;

const Wrapper = styled.div`
  margin: 10px 0 30px 0;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledStarsList = styled(StarsList)`
  margin-right: 15px;
`;

const Paragraph = styled.p`
  font-weight: 500;
  color: rgb(72, 72, 72);
  margin-top: 20px;
  margin-left: 4px;
  margin-bottom: 0px;
  font-size: 15px;
  line-height: 20px;
`;

const MarginWrapper = styled.div`
  margin-top: 10px 0;
  margin-bottom: 20px;
`;

const SubHeader = {
  Title,
  Distance,
  FestivalName,
  Container,
  Wrapper,
  StarsList: StyledStarsList,
  Paragraph,
  MarginWrapper,
};

export default SubHeader;
