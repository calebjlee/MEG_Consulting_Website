import styled from "styled-components";

const SectionContainer = styled.div`
    height:60vh;
    width:100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuoteText = styled.h2`
    font-size: 2vmax;
    font-family: futura-pt, sans-serif;
    color: white;
    font-weight: 500;
    margin: 10%;
`

function TestimonialSection (){
    return(
        <SectionContainer>
            <QuoteText>
                "MEG's team was very professional and helpful. They helped us reach our goals and were professional and organized. I would recommend MEG to any company looking for help reaching their goals, whatever they might be."
            </QuoteText>
        </SectionContainer>
    )
}

export default TestimonialSection;