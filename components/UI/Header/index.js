// @flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(235, 235, 235);
  padding-bottom: 5px;
`;

const BurgerMenu = styled.button`
  background-color: transparent;
  color: transparent;
  border: 0;
  outline: 0;
`;

const Profile = styled.button`
  background-color: transparent;
  color: transparent;
  border: 0;
  outline: 0;
`;

const Header = () => {
  return (
    <Container>
      <BurgerMenu onClick={() => console.log('clicked burger menu')}>
        <svg width={25} height={25} viewBox="0 0 32 32">
          <path
            d="M4.338 5.99h23.324c.052.007.11.01.172.01.923 0 1.67-.748 1.67-1.67s-.747-1.672-1.67-1.672c-.06
            0-.12.003-.18.01H4.34c-.052-.007-.112-.01-.172-.01-.923 0-1.67.748-1.67 1.67S3.242 6 4.165 6c.06 0
            .12-.003.18-.01zM27.662 25.99H4.338c-.923 0-1.67.75-1.67 1.672s.747 1.67 1.67
            1.67h23.324c.052.007.11.01.172.01.923 0 1.67-.748 1.67-1.67S28.758 26 27.835 26c-.06
            0-.12.003-.18.01zM27.662 14.33H4.338c-.923 0-1.67.747-1.67 1.67s.747 1.67 1.67
            1.67h23.324c.052.007.11.01.172.01.923 0 1.67-.748 1.67-1.67s-.747-1.672-1.67-1.672c-.06 0-.12.003-.18.01z"
          />
        </svg>
      </BurgerMenu>
      <Profile onClick={() => console.log('clicked profile')}>
        <svg width={25} height={25} viewBox="0 0 32 32">
          <path
            d="M24.64 14.987c.538-1.21.852-2.622.853-4.106.002-.075.003-.163.003-.252
            0-5.298-4.22-9.61-9.483-9.756-5.29.147-9.51 4.458-9.51 9.756 0 .09 0 .177.004.265 0 1.472.315 2.884.88
            4.16-3.608 1.627-6.044 5.206-6.054 9.355v4.8c0 1.056.856 1.912 1.91 1.912s1.912-.856
            1.912-1.91v-4.8c.01-2.862 1.833-5.295 4.38-6.21 1.685 1.645 3.96 2.673 6.474 2.673s4.787-1.027
            6.425-2.685c2.595.927 4.42 3.36 4.428 6.22v4.8c0 1.056.856 1.912 1.91 1.912s1.912-.856
            1.912-1.91v-4.8c-.014-4.155-2.456-7.735-5.98-9.396zM16 17.067c-3.175-.144-5.694-2.753-5.694-5.95
            0-.083.002-.166.005-.25-.002-.058-.004-.14-.004-.224 0-3.197 2.52-5.806 5.68-5.95 3.188.145 5.708 2.753
            5.708 5.95 0 .083-.002.166-.005.25.002.058.004.14.004.224 0 3.197-2.52 5.806-5.68 5.95z"
          />
        </svg>
      </Profile>
    </Container>
  );
};

export default Header;
