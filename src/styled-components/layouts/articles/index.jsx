import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { rem, min } from '../../../helpers/units';


const Article = styled(animated.article)`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: inherit;
`;

export default Article;

export const HomeArticle = styled(Article)`
    padding: ${rem(32)};
    
    ${min('mobile')} {
        padding: ${rem(64)};
    }
`;

export const AboutArticle = styled(Article)`
    padding: ${rem(32)};
    
    ${min('mobile')} {
        padding: ${rem(64)};
    }
`;

export const PortfolioArticle = styled(Article)`
    padding: ${rem(32)};
    
    ${min('mobile')} {
        padding: ${rem(64)};
    }
`;

export const ContactArticle = styled(Article)`
    padding: ${rem(32)};
`;
