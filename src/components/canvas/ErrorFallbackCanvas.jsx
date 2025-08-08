import { Text } from '@react-three/drei';

const ErrorFallbackCanvas = ({ error }) => {
  return (
    <group position={[0, 0, 0]}>
      <Text
        color="red"
        fontSize={0.5}
        maxWidth={10}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        position={[0, 0, 0]}
      >
        {error.message}
      </Text>
    </group>
  );
};

export default ErrorFallbackCanvas;