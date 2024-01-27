import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen'
import tw from '../tailwind'
import { backgroundStyle } from '../App'
import { Section } from '../components'

const Home = () => {
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={tw`${backgroundStyle}`}
        >
            <Header />
            <View
                style={tw`bg-white dark:bg-black`}>
                <Section title="Step One">
                    Edit <Text style={tw`font-bold`}>App.tsx</Text> to change this
                    screen and then come back to see your edits.
                </Section>
                <Section title="See Your Changes">
                    <ReloadInstructions />
                </Section>
                <Section title="Debug">
                    <DebugInstructions />
                </Section>
                <Section title="Learn More">
                    Read the docs to discover what to do next:
                </Section>
                <LearnMoreLinks />
            </View>
        </ScrollView>
    )
}

export default Home