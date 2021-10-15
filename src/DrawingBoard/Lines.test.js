import ReactThreeTestRenderer from '@react-three/test-renderer';

it('dummy', async () => {
  const renderer = await ReactThreeTestRenderer.create(
    <mesh>
      <boxBufferGeometry args={[2, 2]} />
      <meshStandardMaterial
        args={[
          {
            color: 0x0000ff,
          },
        ]}
      />
    </mesh>,
  );
  console.log(renderer.scene.children);
});
