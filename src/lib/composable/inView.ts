import { ref, Ref } from 'vue';

export type Appeared = {
  appeared: Ref<Array<boolean>>;
  onElementVisibility: (state: boolean, index: number) => void;
  inView: (index: number) => void;
};

export const createVisibleStates = (numOfElements: number): Appeared => {
  const appeared = ref(Array(numOfElements).map(() => false));
  return {
    appeared,
    onElementVisibility(state: boolean, index: number): void {
      if (!this.appeared.value[index]) {
        this.appeared.value[index] = state;
      }
    },
    inView(index: number): boolean {
      return typeof this.appeared === 'undefined' ? false : this.appeared.value[index] ?? false;
    },
  };
};

export const onElementVisibility = (appeared: Ref<Array<boolean>>, state: boolean, index: number) => {
  if (!appeared.value[index]) {
    appeared.value[index] = state;
  }
};

export const inView = (appeared: Ref<Array<boolean>> | undefined, index: number) => {
  return typeof appeared === 'undefined' ? false : appeared.value[index];
}
