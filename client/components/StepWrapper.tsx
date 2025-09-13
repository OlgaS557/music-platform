"use client";
interface StepWrapperProps {
    activeStep: number;
    children: React.ReactNode;
}

const steps = ["Info Track", "Upload Cover", "Upload Audio"];

export default function StepWrapper({ activeStep, children }: StepWrapperProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md relative">
            {/* Обёртка шагов */}
            <div className="relative flex justify-between mb-6 ">
                {/* Линия прогресса (фон) */}
                <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 z-0" />

                {/* Линия прогресса (заполненная часть) */}
                <div
                    className="absolute top-5 left-0 h-1 bg-blue-600 z-0 transition-all duration-500"
                    style={{
                        width: `${(activeStep / (steps.length - 1)) * 100}%`,
                    }}
                />

                {/* Шаги */}
                {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    const isCompleted = index < activeStep;

                    return (
                        <div
                            key={index}
                            className="relative z-10 flex flex-col items-center w-full text-center"
                        >
                            {/* Индикатор шага */}
                            <div
                                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300 
                                ${isCompleted || isActive
                                    ? "bg-blue-600 border-blue-600 text-white"
                                    : "border-gray-300 text-gray-500"
                                }`}
                            >
                                {isCompleted ? "✓" : index + 1}
                            </div>

                            {/* Лейбл */}
                            <div
                                className={`mt-2 text-sm font-medium transition-colors duration-300 
                                ${isActive
                                    ? "text-blue-600"
                                    : "text-gray-500"
                                }`}
                            >
                                {step}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Контент шага */}
            <div className="w-full bg-white p-6 rounded-lg shadow-md">{children}</div>
        </div>
    );
}
