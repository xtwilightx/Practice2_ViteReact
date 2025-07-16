export const StartGame = ({ onStart }) => {
    return (
        <div className="fixed inset-0 bg-amber-400 flex flex-col items-center justify-center z-50 p-4">
            <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-lg">
                Memory Game
            </h1>

            <p className="text-xl text-white mb-12 max-w-md text-center">
                Найди все пары карточек за минимальное количество ходов!
            </p>

            <button
                onClick={onStart}
                className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-12 rounded-full text-2xl shadow-lg transition-transform hover:scale-105"
            >
                Начать игру
            </button>
        </div>
    );
};