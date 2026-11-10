import Star from './Star';
import Toggle from './Toggle/index';

export default function App() {
  return (
    <Toggle>
      <Toggle.Button>
        <Star />
      </Toggle.Button>
      <Toggle.On>The toggle is on</Toggle.On>
    </Toggle>
  );
}
