import Menu from './Menu/Menu';
import menuItems from '../data/menuItems.json';
import ToggleButton from './ToggleButton/ToggleButton';
import Vote from './Vote/Vote';

export const App = () => {
  return (
    <div>
      <Menu items={menuItems} />
      <ToggleButton text="Click me" />
      <Vote />
    </div>
  );
};
