import React from 'react'
import { Container, LeftDiv, LeftBottomDiv, TopRightDiv, Logo, ExtraBoldFont, InputDiv, Input, Search, Cover } from './StyledComponents'
import Grid from './Grid';
import CategoryBar from './CategoryBar'
import Landing from '../images/landing.svg';
import SelectedItem from './SelectedItem';
import { LandingArea } from './Header'
import Header from './Header'

function MarketHome() {
    return (
        <Container>
            <LeftDiv className='top-left'>
                <Logo size="36px" color="#5B6064">
                    EXCLUSIVE
                    <ExtraBoldFont size="36px" color="#5B6064">MRKT</ExtraBoldFont>
                </Logo>
                {/* <InputDiv>
                    <Input placeholder="Search" /><Search>Search</Search>
                </InputDiv> */}
                <ExtraBoldFont size="46px" color="#5B6064">Categories</ExtraBoldFont>
            </LeftDiv>
            <Cover className='cover' />
            <LeftBottomDiv className='left-bottom'>
                <SelectedItem />
            </LeftBottomDiv>
            <CategoryBar />
            <TopRightDiv className='top-right'>
                <Header />
                <LandingArea>
                    <ExtraBoldFont className="landing-area-text">
                        Discover amazing fresh supplies and bring the store to your door.
                    </ExtraBoldFont>
                    <img src={Landing} alt="landing" className="landing-area-image" />
                </LandingArea>
            </TopRightDiv>

            <Grid />

        </Container>
    )
}

export default MarketHome
