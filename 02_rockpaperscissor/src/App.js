import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import React from 'react';
const ROCK = 'Rock';
const SCISSORS = 'Scissors';
const PAPER = 'Paper';

const choice = {
  [ROCK]: {
    name: ROCK,
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8ODxAPEA8QDhASDg8PDhAREA8SFRIWFxYVFR8YHSggGBolHRgTITEjJyorLi4uGB8zODMsNygtLisBCgoKDg0OGBAQFS0dFyUrLSsrLS0tLS0tLS0tLSstLS0tLSstKy0tLS0tLS0tLSstLS0rLS0tLS0tLS0tKy04Lf/AABEIAIUAyAMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIDBgQFB//EADYQAAIBAwMCAgkCBgIDAAAAAAABAgMRIQQSMUFRBQYTIjJhcYGRobHR4UJyc8Hw8WKCFBUj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAIBAwT/xAAeEQEBAAIBBQEAAAAAAAAAAAAAAQIREgMhMVFhQf/aAAwDAQACEQMRAD8A/biAFAAAAAAAAAAAKCAClIDBkCAwUAAUEKAAAAAAAABrABQAAAAAAIAKCFAAAAUgAyBCmAUgMFKQAUAAAAAAAGsAhQpAAAAAAxqT2py7Js5TXeNaxylGlsSTxJ7Un9bsnLKYqxxuTrQcRHxDXSdpV9iva8Iw+XKyWWo1Ki5PUaipKze2M4w6Y4RM6m/EVenr9ds3bLwu7wjTU1lKCcpVKcUuW5xS/JxNTTzklKrKc05LMqtSePf0+xK2loXSiqajL2r2lJSvjjsOd9Ewnt01fzNpI8VHP+nCUvvweePmyi36tLUP/pFX+CbOcnTpuLnhwi1G63LPf3ozemhBOTlZJJyW68lfi6+ZFzyXMMXQvzVTVr0dQr94x/U2x8y05ezSqvHXYl92c29bBJJK/Vq2WiqvxshBXaTuksPrcydS39benPTtNH4jSq+rGVprmEsSX6/I9Z+deIVbbW9yqNYziNsP4P4H1fCPNMo2hqfWje3plzHtuXVe86TJzuHp2IMYTUkpJpppNNcNMyKcwpABQAAAAGoAFAAAAAA06tf/ADn/ACs5GMdzzja2/vc7Gqrxku8X+Dk4S9JC6aV+vf4HLq/jr02VSaT22Tb6tcvornmjWe5UrbW87muP8+x6KVJRu1e9ubvJrjBOSaisxe7N12+nJMvZtnd4pVt/rJPFvZbvLng1rRupFNuyjHb7k3nFu56dZKG7ZdKNk4bV1a93yPHDXSi0k7RatZWx8OhN1vuqfHq9FGMKdPdGLbvOaXKjwl7so8Wp0bj/ABKSxKTjjF/iYwqu7cvWTu2nJq+Mff6mMk9rfRu1utkTbKqTTKF078t5vlYyZQnLuopLDtd4tZmiLbsk8vm+MG+EUs/TrdkxVbNa4P10resr4w21/s8iVo89lfuveetttejtFzniCSu0+h5ksyi8NpXXRPqjrLtDsPJes30pUm805YX/ABf73OhOJ8j39PVzj0Tvjruidsdp4cMvKglxcJZAgAoAA1AAoAABCkAA5HVUnS1EqaVoJXglayi7v9vkdcfJ8boezWUd21Wnbnbf/ZGc3F4XVfLqRy+101+h5qtXamkuNslJpWy7Sgv09xsnX3Ya7t2WPcaZRlJcc5y8PHX3HHw6+WqtQjJRnJSdrxtB3ST4Z86VNWVo8Yz/AAtu2fufe08Xtask2lJKMccde75PD4lSVt0Yq+7a03nObs2zsyXu8Cirvh3WE88ZFFX2zmt0IyxHrLFzbTpuMU3dSbTvbi34/cbLq6TlyrL6kLaZ5bxZN3UY4in0FWfswtwvgl06Hso05WlGVOUlL2sxjtaXFyR0U29ypv1MtblfGbL5DRt5HfdG/POOYq+L9jLV03HZO7anBtLqnd3X+dzRrdS4yT23lKzsorarvlt4+iZq0Cq6mXtxsnZ7VaMPi+W/d+DcZu6jLXTeTKkd9VxeNkdy6bt39v7nWKqfD8Ko0qENkF75Sdryff8AY+nCaZ6pNR58ruvWqhkpHnibUGNty3MEUDO5AiGCAA0QhkQCApAIzFszI0B83XaKE03ttLvGyb+Pc5/W1J0PapVnFXvKnBzx8Fk7BolibjKqZWOGXmfRwjtdWEGle1ZSpTXe+5L6GjU+cvCo+tLV0trVrJ3a73Syd7UoxliUYyXaUU/yef8A9Vpuf/HoX/o0/wBDOH1vP4/OZ+dvCU2o15VlJWUYUqklFcpcfc8y84qo7UPD9fUa9mVLSyUX8L2P1anpacfZpwj/ACwivwjckOEOdflUvF/Eqie3wbXyd/VlUrQopd+Ls9HpvGqkVbwlUpvEpy1iktva3X4s/TbEsbwxZyr82n4D4tqNnp6VGmo8bJRcvm22fe8K8t1qSSbgkuieF9DrEZIudvEZba+dQ8Na5kvkeyGlSNyKZtjFU0ZbQUBYqQKjAsADBgCkKAAAQAAQFIBCWMiASxQAKCFACxQBLCxSgQoAApABkCFMFAQMGIAKEAAAAMCAACAoAxBQBAUAAQoFKYlAoIW4ApABSkBgqAAEBAaAAAAgAAAAQAAQoAguAAAAAoAAoAApABQABQAYP//Z',
  },
  [SCISSORS]: {
    name: SCISSORS,
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHEhITExMVFRUXFxIVGBUWEhgYGRgbGhYXFhoYGBUbHiggHxsrIxYXITImJSkrLi46FyAzODMyNygtLysBCgoKDg0OGxAQGy0mICUtLTUtLS4tLS0rLS8tKy0tLSswLS0tLy8tLy01LS01LS8tLS0uLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUCCAH/xABBEAABAwIDBQUFBQYFBQEAAAABAAIDBBEFITEGEkFRYQcTInGBMlKRobEUI0JichVjgqLB0TNDksLwNHODs+EW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAUBBv/EADIRAAIBAgEJCAEEAwAAAAAAAAABAgMRBAUSITFBUWFxkRMigaGxwdHwMhRCkuEVI1L/2gAMAwEAAhEDEQA/ALxREQBERAEREAREQBERAEREAREQBERAEWOaVsQu4gDmSB9V+QzNl9lwd5EH6IDKiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiKt9u9ufsu9BTO8WbXyj8J0LWH3uBdw0GeYjKSirsvw+HnXnmQ8XsS3skO0u2dPgF2k95KP8phFxy7x2jBprnnkCq0xnbysxK4bJ3DPci8LvWU+K/lu+SjNOyTEHiONrnvcTZrQXFx1J/qSfVWDgXZc+UB1VJ3f7uKxd/E83APQbw6rM5znqO7HD4TCK9R3e96X4LZz8yv5GCclz/G46ue4uJ8y65XY2UwimxCZzH3a/dJiMZ3Hlwt7LxlcC5sRnnyVpw9nuHxixg3urpHk/IgLWruzmklAMJkp5AQWujeSA4Zg7rrnI55EHqnYy4ffA9llXDTi4d5X25qsvNvyOHHW4hssC5kj6yBub4aj/AB2t1Jjm/HbrfSwHETrZ7HYNoYRNA67dHNOTmO4se3g4X8jcEEggqq9pp67DT9mqZN4Wu17QAJRpmQAT1Bz53yJ0dh8WdgNbC69op3NglHA7xtG/zDiM+TnKUKtnZmbEZOjKj2sGr69Gpr5+6WXyiItJwwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgIh2gbQfsWDcjNpZd4NI1a0W3n9DmAOrr8CqcwrDZdoJ208IG8cyT7LGiwL3dBceZIHFdrtCxX7fUzP/C28Tf0scR8zvH1CmvY3hApKM1BHjqHE5ggiNhLGj1Ie6/HfHJZV/snwPoG/0OESX5Ss3zer+K877yS7L7Mw7Nx7kQu8235D7bz58G8mjIedye8iLSkloRwZSlJuUndsIiL0iQztQoWz0TpT7UTmuabZ+JwYR5eIH+EKmcQnLIy5ps5pa5pHAggg/GyubtUqxTUD2HWV8bG+ju8PpaM/FVJs9RnEaqjhH454yf0RnvH/AMrHLLVV6mjgfR5OqZuDk5alndLL3v1Po5ERaj5wIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiALQxiq+wwTSjVkcjx1LWkgfGy31G9v5e5oJ7cQxvxkaCPhdRm7Rb4Muw9PtK0Ib5JdWURi/hYelgr47PXh+G0Rbp3MY9QLO+YKoqsZ3m8Od1POxfaQRh9BKQHBzpILnUOJc+MdQbvHPed7qz0Gk7Hcy1CU1n7mW4iItR86FilkEILnEAAEkk2AAzJJ5LTxfF4MFYZJ5Gxs5nUnk1ozcegBKp7bPbiXaO8UYMVPyPtydX20b+Uep4CE5qJpwuFnXlaOra/ut8DFt7tGNoag7h+4iDmMPO9t6T1sAOgHMqQdjuCmV0ta4ZWMEPWxHePHqA0H8r1DNm8Al2lmEMXhaLGSW2Ubfe/WbENbxsToCVfNNBDgNO1gLYoYWAXc4BrWtGrnH4knzVVKLbzmdLKNaNKksNDhfl8vWdFc/FsWgwdm/PKyJugL3AXOtmjUnoFXG1PagX70VC3oah7fnFGdf1Pyy9kjNVxWVD6p5kle6SQ6ve4uPkCdBnoMgpyqpajNh8m1Knen3V59PktHGu1iNl20kDpDwfL92zzDPbPkd1Q3ENsMRxk2+0PYCRZkA7vPlvN8f8y4+B4bLjtQynhGbsy4jJjR7T3dB8yQOKvnZzZqDZ9gbG27rZyuAL3Hib8B0Cgs+o9ZqqLB4RaY50t3zsXR8rFE4hs/UH7yeOpzsN6QSO8syV6paytwANkpqmQMFgN2QvjHHdfE7Jp6OaDyX0g4b2R0UH2w2TYI5KimY1sjWuL4w28czLXc10el+ItxHPMRlTlHSmSp4/D12qdSFr6tq9Fbmr8ktJh7Pe0IbRu7idrYqkAkbp8EwAuSy+YcNS03yzB1tYC+W5pXYdIyeE2fG5sjD1abgHmOB53K+mcMrW4hDFM32ZGRyDye0OH1V1OectJz8fhFh56NTNtERWGEIiIAiIgCIiAIiIAiIgCh/aa8More9LGPk53+1TBQjtWfamhbzmB+Ebx/uVdb8Gbcmq+Lp879NJUDzcrXlp98hwJa4EFrmmzgQbggjQg5rOUWM+raTVmSPDu0fEaBoa4wzgfiljcH2/UxwB8yCV6q+0vEakWBhh/NHES74yOcPlxUZIuvDW2U+0lvMf+PoXvmL75Huplkr395NI+V/vPcXHnYX0GegsF19mNm5to5N2IbsbSBJKR4WcS0e8+34eFxe1xfqbEbFu2itNLvR0wOVsnS2OjfdZzdqdBzE22o2pg2PjFNTMYZg0bkLRZkQNzvybug421d8XCcad1nS1GbEY3NfYYZXl5L28dS9Nuapouz+mawZXuWsFnSzPsN5x0udLuNgMhkLBVPtPtLUbSvvKd2MG7IWuO43kTpvv/MRlwAuufX1smJSOlmeZJHavPLg1o0a0cAMs+pWs4rydS+haieFwCpPPqaZ79398eljy42WB93kBoLnEgBoFyScgAOJWRx3iAASSQAALkk6ADiVbnZxsL+ybVNQ378jwsOfdg8T+8PyXkYtuyLsViY0YZ0vBb/u3d0T6fZ1sn/8Am4N54H2iUNMh13RqIwel87anoApmiLWkkrI+WqVJVJuctbCItTEaxuHxSSu9mNj3nyaCT9F6Qs3oR85bSRNgfM0eyJJmjoGucB8gFfmxTDHh9CDr9mpv/U3JUAKZ+MzQw3O/NI1pNrkGR93uIHLeJPkvpeKMRANGQAAA6DILPh1oO1lmfejG9390+LuZERFoOKEREAREQBERAEREAREQBVn2uVHip2X0bK8i/Bxa0Zfwn5qzFSvaXXfaqyRvBgZGP4W77vnIR6Kiu+7bidXI0L4nO/5i317vuQ+Qr8aV+OzXpqzH0R6Ul2C2TO08pklBFLGbHh3zx/lj8g/EfQcS2P0FE7Fp4aZh3XSv3d73WgFz3ejQ4+ine0u2MWFwtocMcAIwI3ztzbGLZtjd+OU8XZ2JOrtLacV+UjnY6vUclQo/k9fBfdvvY6u3G27cHBpKPd75oDXvABZTi2gGhkto3Qankaoe8vJJJc5xLnOcbucTq5zjmSvwMAFh/e51uTxKxufZRnNyekuwuEhhoWWl7X7cvXae0ggfWyCKJjpHk2axouT/AGHMnILsbM7K1O0rvu27kV/FM8HdHMN953QZcyFcuzOy8GzbN2Jt3n2pHZvf5ngOgyXsKblyKsXjoUO7rlu+fjWcPYXYNmBWmmtJUcOLIujPzc3eg43naItcYpKyPnKtWdWWdN6QiIvSsKt+1/GhDDHSNPils+TpE05g/qcLehU1x3F48DhfPKbNaNBq48GtHEk5KgquafaOqLrb09Q4AN4Nvk1nRjRqfMqmtKysjp5MoZ0+2l+MfX+tfQlnZBgxramWscPBECxh5yPHiIP5WG3/AJeiuRcjZrB2YDTRQMz3B4ne84nee4+ZJPTIcF11ZCOarGPFV+2quezZy2BERSKAiIgCIiAIiIAiIgCIiA16upbSMfI42axrnuPINBJ+i+eMTqnVkj3u9p7nOd+pxLj8yrZ7T8VFHTCEHxSmx6MbZx+J3RbiC7kqdOayV3eVt334PpMj0c2i6j/c/JaPN36HhJpm07d5xsP+aLBWVraTLV3Bo19eS14qN05D5s+UfAKux0XKzstfpzMTYDip3nDdj4DiV1WtDQABYDQBed5egUEYpc95hqZe6F1ZOwnZwJGtqK4Ek2cyA5WGoMvM8dzQcb6CI7B0H7UxOma4XZHvTOF/cF2+ee7l5r6FV1KmnpZxspYyUZdnDxftw4mKGIRANaAAAAABYADQAcllRFpOGEREAWtWVbKFjpJHBrGglzjoAsGMYrDgsTpZ3hjG8TxPANGpPQKkNstrZdqHWN46Zhu2O+buTpOZ6aD4k1zqZprwuElXluW1jbXat200u9mynjv3bDx5yv8AzHgOXxM67L9kzh7ftczbTSNtGwjONh4kcHuyJ4gZcSFy+zrYc1JZVVTbNFnQwuGp1Ejxy4gcdTwvbKhSi33mbMfiIQh+npalr+PnpvCIivOQEREAREQBERAEREAREQBeXO3ddF6UB7UNpf2ZCKaIb00wNwD7MejnE8A6xbc8ncQoylmq5bRpOrUUFtZBdtMaGMVEkl7RtsxpOQDG33T6kl3PxW4KGyVzqolsAy4ykfRZ5aN1Y7encDbSJuTR/dbG5uCwFhyCxcT6/NtFRirRWhb7e3re70XNWkpG0uftOOrj/RbKL9DUJJWVkfiLs4Ng4xG5LiALaa/8yTFdnpsOG+AXxa77RmP1D+unVA2k82+kwbEYmMHxOlkeQGPLoXEjTvBZpvw8e5c8BdfRS+XaunFQ0jUFT7Y/tQdhkbYK5kkgbZrKhgDnFug71pIJI94XJ4i9yb6U1azOHlLCTlPtIK+8uRFCm9qWFkX799/d+zT38r7lvmuXiXa7TsuKenmldwL7RM+Ju7+VXOcVtOXHDVpOyi+hZKhm1naDTYCXRs+/qBl3bDk0/vH6N8sz0Va41tlXY7cPl7qI/wCXBdlx+aT2jlrYgHksWzmyM+M2EUdmcZXjdYPLmejb9bKmVbZE6dHJeas+u0lz9X7I0cZxSo2ilbJO7fffdjjYDuMudGM1ucs8ybBWHsP2eCLdqKxoLxYsg1DeIdLwLvy6DjcqTbL7HU+z43gN+W2cjhcjmGD8I8s+ZKk69hS2yIYnKKzeyw+iO/V03evIIiK85IREQBERAEREAREQBERAERYppWwNLnENa0ElxNgAMySeSA1cVxBmFxSSv9ljSbDUnQNHUkgDzVEYziMmKyySv9pxvYaWGTR6DIep4lTjbfFZMVh3mgsgEjQ1ujpAWyfevB0Fw3dbrnc52Ar5/iWWu3nWPpMjUYqjKp+5trwSWj58OJomSxXu91+TRL9jbZUnTV72PQFkbmpJszsbPtB4rCOLQyOFvMBupPwGud1ZWDbCUeFgEs753vSWcPRns/EE9VOMJS1GXEY6jh3myd3uWl+O714FVYLVTRFwhjfJp4Whx8rgeq7d8TsQynmYLgi0ElxY3yJ1vxFrHkrgijEQs0ADkBYfBZFaqD3/AHqc6eWU3fsl4u/sij6nCKmqN5KBxJ1dHTyROPMndBZc/oWA7JyS6U9aw8jTiQf6rx/QK90TsOJ48svZTXVlEs2IqH6QVBPJ8LIx/q7w/RdbDezOpnt3hZDn72+70A8PzVwIvewW1lc8s1mrRilxtd/HkQ7Buz6lw+zpAZ385fYv0jGVvO6lzGBgAGQGQA4L2iujFR1HNrV6lZ3qSb5/dAREXpUEREAREQBERAEREAREQBEWGonbTNc97g1rQXOc42AAzJJ5IBUTtpmue9wa1oLnOcbAAZkk8lD8Qq3Y24FwLYAQWREWMhGYklB4cWsPQuzsG5quodjDg54LYgQ6OJwsXEZiWVp48WsPs6nxWDdeqqO7O6Bd12ggm1r2OZ52cDy8QzuQD42SSPNdRtxCJ8T72eNRq0ghzXDqCAfRROLCv2K9/wBpi3oXW3Z42OkY3m2QAEgHXNtwWi1wSVNvZWEmSod3cN98ggm9gBoc/ry6nJVSgpG7C42dBOK/F69j5p7H4NcNCtXeMije0PheAfcbHIL9TvZC3Tmu7sTsQ7EC2apa5sQzZGcnP8xqG/X5qwMK2chofEY43yE7xeY25H8g/CPLM6kkruqMaGnvGuvlhuGbSTT3t6fC3k3p4J2tiijEIDWgAAAAAWAAyAA5LKiLQcQIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIi8PeIwSSABmSdAOZKA81EzaZrnvcGtaC5zibAAZkk8lG5pHYu4PeCImkOiiIsXEZiWUc+LWH2cnHxWDP2aY4w4ONxA0h0bCP8Qg3Erx7oyLGn9R/DbWnrDIQIxvXNyQAQci4DlYjMEloIBs7Nu94SW8/cQmLbNa1xLhILstdpG77xaPx39puhsb2XimpBAATr7Vrt3WEgl+6Q0ZeJ2ZvkTnmb5KShbQtF7F9iC/VxJ8RaHnxOHAXzs0X0utykoXVtifCy/0+p+Q6kXUSRq09K+uO63IcXG4/wDoHTInoMzIaGiZRN3Wjlc8Tbn/AG0C2IYmwANaLALIpJWIN3CIi9PAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCjdfUftZ26P+nac/3zgdP+0CP4yPdB39nFqg1RMLCQ0W714OeYv3TSNHEEEnUAi1i4EeGR6ACwyAAFgAMgABw4Lxskkeb8VghjZRgtYLC7n7oNmt3jc/pF7kD4CwyzE79g3jx1v0aOPnp58OjRYeIs3a621z5k8XdV5rJNmvRYeZfFJ8LWv6cG9NTx69YDdyC9IpJFbCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAufidUYGhrLd487rbi4GVy9wH4WjPUXNm3u4LoLmVNM7vHPA3iQ1rdLMGZOV75mxNtd1ulroDTjiEDQBewvmcy4kkkm2riSSfMr02B1QbAZcRw/iP9B89RuRUJdm4+n9Og8vrmt5jBGLAWCjYk2YaamEGeruJ/tyC2URSIhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=',
  },
  [PAPER]: {
    name: PAPER,
    img: 'data:image/jpeg;base64,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',
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userJudge, setUserJudge] = useState(null);
  const [computerJudge, setComputerJudge] = useState(null);
  const play = userChoice => {
    setUserSelect(choice[userChoice]);

    const computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);

    // judgement(userSelect.name, computerSelect.name);//상태변수는 함수가 다 끝난 후에 바뀌므로 이렇게 쓰면 안됨
    judgement(userChoice, computerChoice);
  };

  const judgement = (user, computer) => {
    // if (
    //   (user === ROCK && computer === SCISSORS) ||
    //   (user === SCISSORS && computer === PAPER) ||
    //   (user === PAPER && computer === ROCK)
    // ) {
    //   setUserJudge('Win');
    //   setComputerJudge('Lose');
    // } else if (user === computer) {
    //   setUserJudge('Tie');
    //   setComputerJudge('Tie');
    // } else {
    //   setUserJudge('Lose');
    //   setComputerJudge('Win');
    // }
    const userResult =
      (user === ROCK && computer === SCISSORS) ||
      (user === SCISSORS && computer === PAPER) ||
      (user === PAPER && computer === ROCK)
        ? 'Win'
        : user === computer
        ? 'Tie'
        : 'Lose';
    const computerResult =
      userResult === 'Win' ? 'Lose' : userResult === 'Tie' ? 'Tie' : 'Win';
    setUserJudge(userResult);
    setComputerJudge(computerResult);
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomVal = Math.floor(Math.random() * itemArray.length); //배열 길이를 곱함
    return itemArray[randomVal];
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={userJudge} />
        <Box title="Computer" item={computerSelect} result={computerJudge} />
      </div>
      <div className="main">
        <button onClick={() => play(SCISSORS)}>가위</button>
        <button onClick={play.bind(null, ROCK)}>바위</button>
        <button onClick={play.bind(null, PAPER)}>보</button>
      </div>
    </>
  );
}

export default App;
