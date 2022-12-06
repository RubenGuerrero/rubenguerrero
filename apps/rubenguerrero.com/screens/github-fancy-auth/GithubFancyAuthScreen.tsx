import { ParentBox } from './ParentBox';
import { ScreenContent } from './ScreenContent';
import { AnimatePresence } from 'framer-motion';

const GithubFancyAuthScreen = () => {
  return (
    <div className="flex h-screen bg-gray-900 p-4 text-white">
      <AnimatePresence>
        <ParentBox>
          <ScreenContent />
        </ParentBox>
      </AnimatePresence>
    </div>
  );
};

export { GithubFancyAuthScreen };
