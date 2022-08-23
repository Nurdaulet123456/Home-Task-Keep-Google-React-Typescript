import React from 'react';
import {Light, Text, Container,} from '../../styles/Empty'

const EmptyNotes: React.FC = () => {
    return (
        <Container>
            <Light />
            <Text>Notes you add appear here</Text>
        </Container>
    )
}

export default EmptyNotes;