import React from 'react';
import { SlideData } from '../types';
import { CoverSlide } from './CoverSlide';
import { PositioningSlide } from './PositioningSlide';
import { PainPointsSlide } from './PainPointsSlide';
import { ArchitectureSlide } from './ArchitectureSlide';
import { BlueprintSlide } from './BlueprintSlide';
import { SmartSearchSlide } from './SmartSearchSlide';
import { SmartCatalogSlide } from './SmartCatalogSlide';
import { SmartAuditSlide } from './SmartAuditSlide';
import { SmartDeliverySlide } from './SmartDeliverySlide';
import { SmartAnalysisSlide } from './SmartAnalysisSlide';
import { ClosedLoopSlide } from './ClosedLoopSlide';
import { ValueSlide } from './ValueSlide';
import { OutroSlide } from './OutroSlide';

export const SlideRenderer: React.FC<{ slide: SlideData }> = ({ slide }) => {
  switch (slide.id) {
    case 1:
      return <CoverSlide slide={slide} />;
    case 2:
      return <PositioningSlide slide={slide} />;
    case 3:
      return <PainPointsSlide slide={slide} />;
    case 4:
      return <ArchitectureSlide slide={slide} />;
    case 5:
      return <BlueprintSlide slide={slide} />;
    case 6:
      return <SmartSearchSlide slide={slide} />;
    case 7:
      return <SmartCatalogSlide slide={slide} />;
    case 8:
      return <SmartAuditSlide slide={slide} />;
    case 9:
      return <SmartDeliverySlide slide={slide} />;
    case 10:
      return <SmartAnalysisSlide slide={slide} />;
    case 11:
      return <ClosedLoopSlide slide={slide} />;
    case 12:
      return <ValueSlide slide={slide} />;
    case 13:
      return <OutroSlide slide={slide} />;
    default:
      return <CoverSlide slide={slide} />;
  }
};
