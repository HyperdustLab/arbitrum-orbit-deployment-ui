'use client';

import { ExternalLink } from '@/components/ExternalLink';
import { NextButton } from '@/components/NextButton';
import { FIRST_STEP, useStep } from '@/hooks/useStep';

export default function InfoPage() {
  const { goToStep } = useStep();
  return (
    <>
      <div className="border-px s flex flex-col gap-4 border border-[#5D5D5D] p-8 text-left font-light leading-tight">
        <p className="text-xl leading-tight">
          All parameters are prefilled with defaults. This includes some randomly generated
          addresses.
          <br />
          We recommend using the defaults for testing purposes.
        </p>
        <p>
          More information around parameter customization and guidance can be found in the{' '}
          <ExternalLink
            href={`${process.env.NEXT_PUBLIC_ARBITRUM_DOCS_BASE_URL}/launch-orbit-chain/orbit-quickstart`}
            className="underline"
          >
            documentation
          </ExternalLink>
          . We recommend opening the documentation in a side window to follow along.
          <br />
        </p>
        <p>
          Please ensure you have at least <strong>1.0 Arbitrum One ETH</strong> (or 0.6 Arbitrum One ETH plus 0.4 native token for custom fee token chain) before getting started.
        </p>
      </div>
      <div className="flex justify-end py-4">
        <NextButton onClick={() => goToStep(FIRST_STEP)} />
      </div>
    </>
  );
}
