export default {
    bind (element, binding) {
        const defaults = {
            target: 0,
            speed: 500,
            currentIteration: 0,
            iteration: 10
        };
        let config = Object.assign(defaults, binding.value);

        const getElementValue = () => Math.round(element.innerText || 0);
        const getValue = percent => Math.round(((config.target - getElementValue()) * percent) + getElementValue());

        const handler = updatedConfig => {
            config.currentIteration = 0;
            config = Object.assign(config, updatedConfig);

            element._updateInterval = setInterval(() => {
                element.innerText = getValue(config.currentIteration / config.iteration);
                config.currentIteration = config.currentIteration + 1;

                if (config.currentIteration >= config.iteration) {
                    clearInterval(element._updateInterval);
                }

            }, config.speed / config.iteration);
        };

        element._numberTransitionHandler = handler;

        handler();
    },

    update (element, binding) {
        element._numberTransitionHandler(binding.value);
    },

    unbind (element) {
        clearInterval(element._updateInterval);
        element._numberTransitionHandler = null;
    }
};
