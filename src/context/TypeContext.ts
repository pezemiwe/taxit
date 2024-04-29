import { createContext, useContext } from 'react';

interface TypeContextProps {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

const TypeContext = createContext<TypeContextProps | null>(null);

const useTypeContext = () => {
  const context = useContext(TypeContext);
  if (!context) {
    throw new Error('useTypeContext must be used within a TypeProvider');
  }
  return context;
};

export { TypeContext, useTypeContext };
