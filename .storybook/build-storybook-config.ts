type VibeStorybookConfig = {
  addonConfig: Array<string>;
  main: {
    addons: Array<string>;
    features: Record<string, any>;
  };
};

function buildStorybookConfig(
  {
    interactionTests
    // accessibility = true,
    // controls = true
  } = { interactionTests: true }
): VibeStorybookConfig {
  const addons = [];
  const features = {};
  if (interactionTests) {
    const { addons: interactionsAddons, features: interactionsFeatures } = createInteractionTestsSettings();
    addons.push(...interactionsAddons);
    Object.assign(features, interactionsFeatures);
  }

  return {
    addonConfig: [],
    main: {
      addons: addons,
      features: features
    }
  };
}

function createInteractionTestsSettings() {
  return {
    addons: ["@storybook/addon-interactions"],
    features: {
      interactionsDebugger: true
    }
  };
}

module.exports = buildStorybookConfig;
