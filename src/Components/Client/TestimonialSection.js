import styled from "styled-components";

const SectionContainer = styled.div`
    height:60vh;
    width:100%;
    background-color: rgba(0, 0, 0, 0.75);
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
                "The group of four students from MEG conducted a thorough interview with me on my needs and
                expectations.
                They then proceeded to develop a detailed report on U.S. venture capital funds in the size-range we are
                considering and completed it in 4 months.
                The report was submitted and is our working document as we develop our plan for our new fund. We
                are very impressed with the Ross MEG Club and team and the specific work product."
                <br/><br/>-Bobby Schostak, CEO of Mad Dog Ventures
            </QuoteText>
        </SectionContainer>
    )
}

export default TestimonialSection;