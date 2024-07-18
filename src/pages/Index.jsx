import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', inputValue);
    setInputValue('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-pink-50">
      <header className="bg-pink-500 text-white p-4">
        <h1 className="text-2xl font-bold">My Pink App</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4 text-pink-700">Welcome to My Pink App</h2>
        <p className="mb-4 text-pink-600">This is a pink-themed application that you can modify and build upon.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter something..."
            value={inputValue}
            onChange={handleInputChange}
            className="border-pink-300 focus:border-pink-500 focus:ring-pink-500"
          />
          <Button 
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            Submit
          </Button>
        </form>
      </main>

      <footer className="bg-pink-200 p-4 text-center text-pink-700">
        <p>&copy; 2023 My Pink App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;