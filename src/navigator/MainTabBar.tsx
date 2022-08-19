import { useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native'
import IconBox from "../components/common/svg/IconBox";

const MainTabBar = ({ navInfo }) => {

    const [activeNavId, setActiveIndex] = useState(0);
    const { dark, colors } = useTheme();

    useEffect(() => {
        navInfo.navigation.navigate(navInfo.state.routes[activeNavId].name);
    }, [activeNavId]);

    return (
        <Wrapper style={{ backgroundColor: colors.card, borderColor: colors.border }}>
            {navInfo.state.routes.map((nav, index) => (
                <TabButton key={index} onPress={() => setActiveIndex(index)} isActive={activeNavId === index}>
                    <LinearGradient
                        colors={activeNavId == index ? ['rgba(62,126,255,0.08)', 'transparent'] : [colors.card, colors.card]}
                        style={{
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {index === 0 && (activeNavId == 0 ? <IconBox name="nav-case2" /> : <IconBox name="nav-case" />)}
                        {index === 1 && (activeNavId == 1 ? <IconBox name="nav-client2" /> : <IconBox name="nav-client" />)}
                        {index === 2 && (activeNavId == 2 ? <IconBox name="nav-activity2" /> : <IconBox name="nav-activity" />)}
                        {index === 3 && (activeNavId == 3 ? <IconBox name="nav-setting2" /> : <IconBox name="nav-setting" />)}
                        {index === 4 && (activeNavId == 4 ? <IconBox name="nav-profile2" /> : <IconBox name="nav-profile" />)}
                    </LinearGradient>
                </TabButton>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.View`
    padding: 0 20px;
    flex-direction: row;
    border-top-width: 1px;
    justify-content: space-around;
`;

const TabButton = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    // align-items: center;
    // justify-content: center;
    border-top-color: #3e7eff;
    border-top-width: ${props => props.isActive ? '3px' : '0px'};
`;

export default MainTabBar;