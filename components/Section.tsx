import tw from "../tailwind";
import { Text, View } from "react-native";
import { SectionProps } from "../types";

export function Section({ children, title }: SectionProps): React.JSX.Element {
    return (
        <View style={tw`px-[12px] mt-[16px]`}>
            <Text
                style={tw`text-black dark:text-white font-semibold text-[24px] `}>
                {title}
            </Text>
            <Text
                style={tw`font-normal text-black dark:text-white text-[18px] mt-[8px] `}>
                {children}
            </Text>
        </View>
    );
}