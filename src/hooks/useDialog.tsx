import { $, useSignal, useVisibleTask$ } from "@builder.io/qwik"

export default function useDialog() {
  const dialogRef = useSignal<HTMLDialogElement>()
  const showDialogSig = useSignal(false)

  const showDialog = $(() => {
    showDialogSig.value = true
  })

  useVisibleTask$(({ track, cleanup }) => {
    track(() => showDialogSig.value)
    if (!showDialogSig.value) return

    const dialogElement = dialogRef.value as HTMLDialogElement

    const clickOutside = (e: MouseEvent) => {
      const clickX = e.clientX,
            clickY = e.clientY

      const { left, top, right, bottom }: DOMRect = dialogElement.getBoundingClientRect()

      if (clickX < left || clickX > right || clickY < top || clickY > bottom) {
        showDialogSig.value = false
      }
    }

    dialogElement.showModal()
    dialogElement.addEventListener('click', clickOutside)

    cleanup(() => dialogElement.removeEventListener('click', clickOutside))
  })

  return {
    dialogRef,
    isShown: showDialogSig.value,
    showDialog,
  }
}