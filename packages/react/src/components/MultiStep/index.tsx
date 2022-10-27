import { MultiStepContainer, MultiStepLabel, Step, Steps } from './styles';

export interface MultiStepProps {
	length: number;
	currentStep?: number;
}

export const MultiStep = ({ length, currentStep = 1 }: MultiStepProps) => {
	return (
		<MultiStepContainer>
			<MultiStepLabel>
				{currentStep}/ {length}
			</MultiStepLabel>

			<Steps css={{ '--steps-length': length }}>
				{Array.from({ length }, (_, i) => i + 1).map((step) => (
					<Step key={step} active={currentStep >= step} />
				))}
			</Steps>
		</MultiStepContainer>
	);
};

MultiStep.displayName = 'MultiStep';
