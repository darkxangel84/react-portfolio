import React from 'react'
import HeroBanner from '../HeroBanner';
import Main from '../Main';

export default function Home() {
    return (
        <div className="page">
            <HeroBanner name="Aimee" />
            <Main headingTitle="I’m passionate about clean looking websites that work really well on all devices." />
        </div>
    )
}
