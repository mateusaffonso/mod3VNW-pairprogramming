import React from 'react'

export default function main() {

  return(
    <>
      <main>
        <h2>lastest recipes</h2>
        <hr/>
        <container>
          <section>
            <figure><img src="" alt="" /></figure>
            <p>Red Velvet Cake</p>
          </section>

          <section>
            <figure><img src="" alt="" /></figure>
            <p>Margherita Pizza</p>
          </section>

          <section>
            <figure><img src="" alt="" /></figure>
            <p>Peanut Smoothie</p>
          </section>
        </container>

        <container>
          <figure><img src="" alt="" /></figure>
          <div>
            <h2>ABOUT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu
              tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis
              dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem,
              quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis
              sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
              Pellentesque mattis hendrerit semper. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Ut
              vestibulum nisl ante, et ultricies sapien facilisis aliquam.
            </p>
          </div>
        </container>

        <container>
          <h2>SUBSCRIBE</h2>
          <p>Sign up for newsletter</p>
          <input type="email" />
          <button>SUBMIT</button>
        </container>
      </main>
    </>
  )
}