
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model TermDeposit
 * 
 */
export type TermDeposit = $Result.DefaultSelection<Prisma.$TermDepositPayload>
/**
 * Model Bond
 * 
 */
export type Bond = $Result.DefaultSelection<Prisma.$BondPayload>
/**
 * Model Crypto
 * 
 */
export type Crypto = $Result.DefaultSelection<Prisma.$CryptoPayload>
/**
 * Model MonthlySnapshot
 * 
 */
export type MonthlySnapshot = $Result.DefaultSelection<Prisma.$MonthlySnapshotPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Currency: {
  USD: 'USD',
  EUR: 'EUR',
  GBP: 'GBP',
  CAD: 'CAD',
  AUD: 'AUD',
  CZK: 'CZK',
  HUF: 'HUF',
  PLN: 'PLN'
};

export type Currency = (typeof Currency)[keyof typeof Currency]


export const IncomeType: {
  FullTime: 'FullTime',
  Contract: 'Contract',
  Freelance: 'Freelance',
  Business: 'Business'
};

export type IncomeType = (typeof IncomeType)[keyof typeof IncomeType]


export const IncomeFrequency: {
  Monthly: 'Monthly',
  Weekly: 'Weekly',
  Daily: 'Daily',
  Invoice: 'Invoice'
};

export type IncomeFrequency = (typeof IncomeFrequency)[keyof typeof IncomeFrequency]


export const Language: {
  EN: 'EN',
  SK: 'SK'
};

export type Language = (typeof Language)[keyof typeof Language]


export const AccountType: {
  Checking: 'Checking',
  Savings: 'Savings',
  CreditCard: 'CreditCard',
  Loan: 'Loan',
  Investment: 'Investment',
  Mortgage: 'Mortgage',
  Crypto: 'Crypto',
  Other: 'Other'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const InvestmentType: {
  Stock: 'Stock',
  ETF: 'ETF',
  Bond: 'Bond',
  TermDeposit: 'TermDeposit',
  Crypto: 'Crypto',
  MutualFund: 'MutualFund',
  Commodity: 'Commodity',
  RealEstate: 'RealEstate',
  Other: 'Other'
};

export type InvestmentType = (typeof InvestmentType)[keyof typeof InvestmentType]


export const BondFrequencyOfInterestPayments: {
  HalfYearly: 'HalfYearly',
  Annually: 'Annually'
};

export type BondFrequencyOfInterestPayments = (typeof BondFrequencyOfInterestPayments)[keyof typeof BondFrequencyOfInterestPayments]


export const CryptoCurrency: {
  BTC: 'BTC',
  ETH: 'ETH'
};

export type CryptoCurrency = (typeof CryptoCurrency)[keyof typeof CryptoCurrency]

}

export type Currency = $Enums.Currency

export const Currency: typeof $Enums.Currency

export type IncomeType = $Enums.IncomeType

export const IncomeType: typeof $Enums.IncomeType

export type IncomeFrequency = $Enums.IncomeFrequency

export const IncomeFrequency: typeof $Enums.IncomeFrequency

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type InvestmentType = $Enums.InvestmentType

export const InvestmentType: typeof $Enums.InvestmentType

export type BondFrequencyOfInterestPayments = $Enums.BondFrequencyOfInterestPayments

export const BondFrequencyOfInterestPayments: typeof $Enums.BondFrequencyOfInterestPayments

export type CryptoCurrency = $Enums.CryptoCurrency

export const CryptoCurrency: typeof $Enums.CryptoCurrency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.termDeposit`: Exposes CRUD operations for the **TermDeposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermDeposits
    * const termDeposits = await prisma.termDeposit.findMany()
    * ```
    */
  get termDeposit(): Prisma.TermDepositDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bond`: Exposes CRUD operations for the **Bond** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bonds
    * const bonds = await prisma.bond.findMany()
    * ```
    */
  get bond(): Prisma.BondDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.crypto`: Exposes CRUD operations for the **Crypto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cryptos
    * const cryptos = await prisma.crypto.findMany()
    * ```
    */
  get crypto(): Prisma.CryptoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlySnapshot`: Exposes CRUD operations for the **MonthlySnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlySnapshots
    * const monthlySnapshots = await prisma.monthlySnapshot.findMany()
    * ```
    */
  get monthlySnapshot(): Prisma.MonthlySnapshotDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UserProfile: 'UserProfile',
    Account: 'Account',
    TermDeposit: 'TermDeposit',
    Bond: 'Bond',
    Crypto: 'Crypto',
    MonthlySnapshot: 'MonthlySnapshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "userProfile" | "account" | "termDeposit" | "bond" | "crypto" | "monthlySnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      TermDeposit: {
        payload: Prisma.$TermDepositPayload<ExtArgs>
        fields: Prisma.TermDepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermDepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermDepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>
          }
          findFirst: {
            args: Prisma.TermDepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermDepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>
          }
          findMany: {
            args: Prisma.TermDepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>[]
          }
          create: {
            args: Prisma.TermDepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>
          }
          createMany: {
            args: Prisma.TermDepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermDepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>[]
          }
          delete: {
            args: Prisma.TermDepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>
          }
          update: {
            args: Prisma.TermDepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>
          }
          deleteMany: {
            args: Prisma.TermDepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermDepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermDepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>[]
          }
          upsert: {
            args: Prisma.TermDepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermDepositPayload>
          }
          aggregate: {
            args: Prisma.TermDepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermDeposit>
          }
          groupBy: {
            args: Prisma.TermDepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermDepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermDepositCountArgs<ExtArgs>
            result: $Utils.Optional<TermDepositCountAggregateOutputType> | number
          }
        }
      }
      Bond: {
        payload: Prisma.$BondPayload<ExtArgs>
        fields: Prisma.BondFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BondFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BondFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>
          }
          findFirst: {
            args: Prisma.BondFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BondFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>
          }
          findMany: {
            args: Prisma.BondFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>[]
          }
          create: {
            args: Prisma.BondCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>
          }
          createMany: {
            args: Prisma.BondCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BondCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>[]
          }
          delete: {
            args: Prisma.BondDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>
          }
          update: {
            args: Prisma.BondUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>
          }
          deleteMany: {
            args: Prisma.BondDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BondUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BondUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>[]
          }
          upsert: {
            args: Prisma.BondUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BondPayload>
          }
          aggregate: {
            args: Prisma.BondAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBond>
          }
          groupBy: {
            args: Prisma.BondGroupByArgs<ExtArgs>
            result: $Utils.Optional<BondGroupByOutputType>[]
          }
          count: {
            args: Prisma.BondCountArgs<ExtArgs>
            result: $Utils.Optional<BondCountAggregateOutputType> | number
          }
        }
      }
      Crypto: {
        payload: Prisma.$CryptoPayload<ExtArgs>
        fields: Prisma.CryptoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>
          }
          findFirst: {
            args: Prisma.CryptoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>
          }
          findMany: {
            args: Prisma.CryptoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>[]
          }
          create: {
            args: Prisma.CryptoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>
          }
          createMany: {
            args: Prisma.CryptoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CryptoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>[]
          }
          delete: {
            args: Prisma.CryptoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>
          }
          update: {
            args: Prisma.CryptoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>
          }
          deleteMany: {
            args: Prisma.CryptoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CryptoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CryptoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>[]
          }
          upsert: {
            args: Prisma.CryptoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CryptoPayload>
          }
          aggregate: {
            args: Prisma.CryptoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrypto>
          }
          groupBy: {
            args: Prisma.CryptoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CryptoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptoCountArgs<ExtArgs>
            result: $Utils.Optional<CryptoCountAggregateOutputType> | number
          }
        }
      }
      MonthlySnapshot: {
        payload: Prisma.$MonthlySnapshotPayload<ExtArgs>
        fields: Prisma.MonthlySnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlySnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlySnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>
          }
          findFirst: {
            args: Prisma.MonthlySnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlySnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>
          }
          findMany: {
            args: Prisma.MonthlySnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>[]
          }
          create: {
            args: Prisma.MonthlySnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>
          }
          createMany: {
            args: Prisma.MonthlySnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlySnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>[]
          }
          delete: {
            args: Prisma.MonthlySnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>
          }
          update: {
            args: Prisma.MonthlySnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MonthlySnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlySnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlySnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>[]
          }
          upsert: {
            args: Prisma.MonthlySnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlySnapshotPayload>
          }
          aggregate: {
            args: Prisma.MonthlySnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlySnapshot>
          }
          groupBy: {
            args: Prisma.MonthlySnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlySnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlySnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlySnapshotCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    userProfile?: UserProfileOmit
    account?: AccountOmit
    termDeposit?: TermDepositOmit
    bond?: BondOmit
    crypto?: CryptoOmit
    monthlySnapshot?: MonthlySnapshotOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    termDeposit: number
    bond: number
    crypto: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termDeposit?: boolean | AccountCountOutputTypeCountTermDepositArgs
    bond?: boolean | AccountCountOutputTypeCountBondArgs
    crypto?: boolean | AccountCountOutputTypeCountCryptoArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTermDepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermDepositWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountBondArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BondWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCryptoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    id: number | null
    incomeAmount: number | null
    incomeHourlyRate: number | null
    workingHoursPerDay: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    id: number | null
    incomeAmount: number | null
    incomeHourlyRate: number | null
    workingHoursPerDay: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    language: $Enums.Language | null
    currency: $Enums.Currency | null
    incomeType: $Enums.IncomeType | null
    incomeAmount: number | null
    incomeHourlyRate: number | null
    workingHoursPerDay: number | null
    incomeFrequency: $Enums.IncomeFrequency | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    language: $Enums.Language | null
    currency: $Enums.Currency | null
    incomeType: $Enums.IncomeType | null
    incomeAmount: number | null
    incomeHourlyRate: number | null
    workingHoursPerDay: number | null
    incomeFrequency: $Enums.IncomeFrequency | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    language: number
    currency: number
    incomeType: number
    incomeAmount: number
    incomeHourlyRate: number
    workingHoursPerDay: number
    incomeFrequency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    id?: true
    incomeAmount?: true
    incomeHourlyRate?: true
    workingHoursPerDay?: true
  }

  export type UserProfileSumAggregateInputType = {
    id?: true
    incomeAmount?: true
    incomeHourlyRate?: true
    workingHoursPerDay?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    language?: true
    currency?: true
    incomeType?: true
    incomeAmount?: true
    incomeHourlyRate?: true
    workingHoursPerDay?: true
    incomeFrequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    language?: true
    currency?: true
    incomeType?: true
    incomeAmount?: true
    incomeHourlyRate?: true
    workingHoursPerDay?: true
    incomeFrequency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    language?: true
    currency?: true
    incomeType?: true
    incomeAmount?: true
    incomeHourlyRate?: true
    workingHoursPerDay?: true
    incomeFrequency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: number
    clerkId: string
    name: string | null
    language: $Enums.Language
    currency: $Enums.Currency
    incomeType: $Enums.IncomeType
    incomeAmount: number | null
    incomeHourlyRate: number | null
    workingHoursPerDay: number | null
    incomeFrequency: $Enums.IncomeFrequency
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    language?: boolean
    currency?: boolean
    incomeType?: boolean
    incomeAmount?: boolean
    incomeHourlyRate?: boolean
    workingHoursPerDay?: boolean
    incomeFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    language?: boolean
    currency?: boolean
    incomeType?: boolean
    incomeAmount?: boolean
    incomeHourlyRate?: boolean
    workingHoursPerDay?: boolean
    incomeFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    language?: boolean
    currency?: boolean
    incomeType?: boolean
    incomeAmount?: boolean
    incomeHourlyRate?: boolean
    workingHoursPerDay?: boolean
    incomeFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    language?: boolean
    currency?: boolean
    incomeType?: boolean
    incomeAmount?: boolean
    incomeHourlyRate?: boolean
    workingHoursPerDay?: boolean
    incomeFrequency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "language" | "currency" | "incomeType" | "incomeAmount" | "incomeHourlyRate" | "workingHoursPerDay" | "incomeFrequency" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      name: string | null
      language: $Enums.Language
      currency: $Enums.Currency
      incomeType: $Enums.IncomeType
      incomeAmount: number | null
      incomeHourlyRate: number | null
      workingHoursPerDay: number | null
      incomeFrequency: $Enums.IncomeFrequency
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'Int'>
    readonly clerkId: FieldRef<"UserProfile", 'String'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly language: FieldRef<"UserProfile", 'Language'>
    readonly currency: FieldRef<"UserProfile", 'Currency'>
    readonly incomeType: FieldRef<"UserProfile", 'IncomeType'>
    readonly incomeAmount: FieldRef<"UserProfile", 'Float'>
    readonly incomeHourlyRate: FieldRef<"UserProfile", 'Float'>
    readonly workingHoursPerDay: FieldRef<"UserProfile", 'Int'>
    readonly incomeFrequency: FieldRef<"UserProfile", 'IncomeFrequency'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    balance: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    type: $Enums.AccountType | null
    balance: number | null
    institution: string | null
    accountNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    name: string | null
    type: $Enums.AccountType | null
    balance: number | null
    institution: string | null
    accountNumber: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    clerkId: number
    name: number
    type: number
    balance: number
    institution: number
    accountNumber: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    type?: true
    balance?: true
    institution?: true
    accountNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    type?: true
    balance?: true
    institution?: true
    accountNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    clerkId?: true
    name?: true
    type?: true
    balance?: true
    institution?: true
    accountNumber?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance: number
    institution: string | null
    accountNumber: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    institution?: boolean
    accountNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    termDeposit?: boolean | Account$termDepositArgs<ExtArgs>
    bond?: boolean | Account$bondArgs<ExtArgs>
    crypto?: boolean | Account$cryptoArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    institution?: boolean
    accountNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    institution?: boolean
    accountNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    clerkId?: boolean
    name?: boolean
    type?: boolean
    balance?: boolean
    institution?: boolean
    accountNumber?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "name" | "type" | "balance" | "institution" | "accountNumber" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    termDeposit?: boolean | Account$termDepositArgs<ExtArgs>
    bond?: boolean | Account$bondArgs<ExtArgs>
    crypto?: boolean | Account$cryptoArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      termDeposit: Prisma.$TermDepositPayload<ExtArgs>[]
      bond: Prisma.$BondPayload<ExtArgs>[]
      crypto: Prisma.$CryptoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      name: string
      type: $Enums.AccountType
      balance: number
      institution: string | null
      accountNumber: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    termDeposit<T extends Account$termDepositArgs<ExtArgs> = {}>(args?: Subset<T, Account$termDepositArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bond<T extends Account$bondArgs<ExtArgs> = {}>(args?: Subset<T, Account$bondArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    crypto<T extends Account$cryptoArgs<ExtArgs> = {}>(args?: Subset<T, Account$cryptoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly clerkId: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'AccountType'>
    readonly balance: FieldRef<"Account", 'Float'>
    readonly institution: FieldRef<"Account", 'String'>
    readonly accountNumber: FieldRef<"Account", 'String'>
    readonly isActive: FieldRef<"Account", 'Boolean'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.termDeposit
   */
  export type Account$termDepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    where?: TermDepositWhereInput
    orderBy?: TermDepositOrderByWithRelationInput | TermDepositOrderByWithRelationInput[]
    cursor?: TermDepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TermDepositScalarFieldEnum | TermDepositScalarFieldEnum[]
  }

  /**
   * Account.bond
   */
  export type Account$bondArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    where?: BondWhereInput
    orderBy?: BondOrderByWithRelationInput | BondOrderByWithRelationInput[]
    cursor?: BondWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BondScalarFieldEnum | BondScalarFieldEnum[]
  }

  /**
   * Account.crypto
   */
  export type Account$cryptoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    where?: CryptoWhereInput
    orderBy?: CryptoOrderByWithRelationInput | CryptoOrderByWithRelationInput[]
    cursor?: CryptoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoScalarFieldEnum | CryptoScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model TermDeposit
   */

  export type AggregateTermDeposit = {
    _count: TermDepositCountAggregateOutputType | null
    _avg: TermDepositAvgAggregateOutputType | null
    _sum: TermDepositSumAggregateOutputType | null
    _min: TermDepositMinAggregateOutputType | null
    _max: TermDepositMaxAggregateOutputType | null
  }

  export type TermDepositAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    amountInvested: number | null
    interestRate: number | null
    termInMonths: number | null
    taxRate: number | null
  }

  export type TermDepositSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    amountInvested: number | null
    interestRate: number | null
    termInMonths: number | null
    taxRate: number | null
  }

  export type TermDepositMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    accountId: number | null
    name: string | null
    type: $Enums.InvestmentType | null
    currency: $Enums.Currency | null
    institution: string | null
    amountInvested: number | null
    interestRate: number | null
    termInMonths: number | null
    startDate: Date | null
    endDate: Date | null
    taxRate: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermDepositMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    accountId: number | null
    name: string | null
    type: $Enums.InvestmentType | null
    currency: $Enums.Currency | null
    institution: string | null
    amountInvested: number | null
    interestRate: number | null
    termInMonths: number | null
    startDate: Date | null
    endDate: Date | null
    taxRate: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermDepositCountAggregateOutputType = {
    id: number
    clerkId: number
    accountId: number
    name: number
    type: number
    currency: number
    institution: number
    amountInvested: number
    interestRate: number
    termInMonths: number
    startDate: number
    endDate: number
    taxRate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermDepositAvgAggregateInputType = {
    id?: true
    accountId?: true
    amountInvested?: true
    interestRate?: true
    termInMonths?: true
    taxRate?: true
  }

  export type TermDepositSumAggregateInputType = {
    id?: true
    accountId?: true
    amountInvested?: true
    interestRate?: true
    termInMonths?: true
    taxRate?: true
  }

  export type TermDepositMinAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    institution?: true
    amountInvested?: true
    interestRate?: true
    termInMonths?: true
    startDate?: true
    endDate?: true
    taxRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermDepositMaxAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    institution?: true
    amountInvested?: true
    interestRate?: true
    termInMonths?: true
    startDate?: true
    endDate?: true
    taxRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermDepositCountAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    institution?: true
    amountInvested?: true
    interestRate?: true
    termInMonths?: true
    startDate?: true
    endDate?: true
    taxRate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermDepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermDeposit to aggregate.
     */
    where?: TermDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermDeposits to fetch.
     */
    orderBy?: TermDepositOrderByWithRelationInput | TermDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermDeposits
    **/
    _count?: true | TermDepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TermDepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TermDepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermDepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermDepositMaxAggregateInputType
  }

  export type GetTermDepositAggregateType<T extends TermDepositAggregateArgs> = {
        [P in keyof T & keyof AggregateTermDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermDeposit[P]>
      : GetScalarType<T[P], AggregateTermDeposit[P]>
  }




  export type TermDepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermDepositWhereInput
    orderBy?: TermDepositOrderByWithAggregationInput | TermDepositOrderByWithAggregationInput[]
    by: TermDepositScalarFieldEnum[] | TermDepositScalarFieldEnum
    having?: TermDepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermDepositCountAggregateInputType | true
    _avg?: TermDepositAvgAggregateInputType
    _sum?: TermDepositSumAggregateInputType
    _min?: TermDepositMinAggregateInputType
    _max?: TermDepositMaxAggregateInputType
  }

  export type TermDepositGroupByOutputType = {
    id: number
    clerkId: string
    accountId: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution: string | null
    amountInvested: number
    interestRate: number
    termInMonths: number
    startDate: Date
    endDate: Date
    taxRate: number | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TermDepositCountAggregateOutputType | null
    _avg: TermDepositAvgAggregateOutputType | null
    _sum: TermDepositSumAggregateOutputType | null
    _min: TermDepositMinAggregateOutputType | null
    _max: TermDepositMaxAggregateOutputType | null
  }

  type GetTermDepositGroupByPayload<T extends TermDepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermDepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermDepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermDepositGroupByOutputType[P]>
            : GetScalarType<T[P], TermDepositGroupByOutputType[P]>
        }
      >
    >


  export type TermDepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    amountInvested?: boolean
    interestRate?: boolean
    termInMonths?: boolean
    startDate?: boolean
    endDate?: boolean
    taxRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | TermDeposit$accountArgs<ExtArgs>
  }, ExtArgs["result"]["termDeposit"]>

  export type TermDepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    amountInvested?: boolean
    interestRate?: boolean
    termInMonths?: boolean
    startDate?: boolean
    endDate?: boolean
    taxRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | TermDeposit$accountArgs<ExtArgs>
  }, ExtArgs["result"]["termDeposit"]>

  export type TermDepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    amountInvested?: boolean
    interestRate?: boolean
    termInMonths?: boolean
    startDate?: boolean
    endDate?: boolean
    taxRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | TermDeposit$accountArgs<ExtArgs>
  }, ExtArgs["result"]["termDeposit"]>

  export type TermDepositSelectScalar = {
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    amountInvested?: boolean
    interestRate?: boolean
    termInMonths?: boolean
    startDate?: boolean
    endDate?: boolean
    taxRate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TermDepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "accountId" | "name" | "type" | "currency" | "institution" | "amountInvested" | "interestRate" | "termInMonths" | "startDate" | "endDate" | "taxRate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["termDeposit"]>
  export type TermDepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | TermDeposit$accountArgs<ExtArgs>
  }
  export type TermDepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | TermDeposit$accountArgs<ExtArgs>
  }
  export type TermDepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | TermDeposit$accountArgs<ExtArgs>
  }

  export type $TermDepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TermDeposit"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      accountId: number | null
      name: string
      type: $Enums.InvestmentType
      currency: $Enums.Currency
      institution: string | null
      amountInvested: number
      interestRate: number
      termInMonths: number
      startDate: Date
      endDate: Date
      taxRate: number | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["termDeposit"]>
    composites: {}
  }

  type TermDepositGetPayload<S extends boolean | null | undefined | TermDepositDefaultArgs> = $Result.GetResult<Prisma.$TermDepositPayload, S>

  type TermDepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermDepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermDepositCountAggregateInputType | true
    }

  export interface TermDepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermDeposit'], meta: { name: 'TermDeposit' } }
    /**
     * Find zero or one TermDeposit that matches the filter.
     * @param {TermDepositFindUniqueArgs} args - Arguments to find a TermDeposit
     * @example
     * // Get one TermDeposit
     * const termDeposit = await prisma.termDeposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermDepositFindUniqueArgs>(args: SelectSubset<T, TermDepositFindUniqueArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermDeposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermDepositFindUniqueOrThrowArgs} args - Arguments to find a TermDeposit
     * @example
     * // Get one TermDeposit
     * const termDeposit = await prisma.termDeposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermDepositFindUniqueOrThrowArgs>(args: SelectSubset<T, TermDepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermDeposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositFindFirstArgs} args - Arguments to find a TermDeposit
     * @example
     * // Get one TermDeposit
     * const termDeposit = await prisma.termDeposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermDepositFindFirstArgs>(args?: SelectSubset<T, TermDepositFindFirstArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermDeposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositFindFirstOrThrowArgs} args - Arguments to find a TermDeposit
     * @example
     * // Get one TermDeposit
     * const termDeposit = await prisma.termDeposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermDepositFindFirstOrThrowArgs>(args?: SelectSubset<T, TermDepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermDeposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermDeposits
     * const termDeposits = await prisma.termDeposit.findMany()
     * 
     * // Get first 10 TermDeposits
     * const termDeposits = await prisma.termDeposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termDepositWithIdOnly = await prisma.termDeposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermDepositFindManyArgs>(args?: SelectSubset<T, TermDepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermDeposit.
     * @param {TermDepositCreateArgs} args - Arguments to create a TermDeposit.
     * @example
     * // Create one TermDeposit
     * const TermDeposit = await prisma.termDeposit.create({
     *   data: {
     *     // ... data to create a TermDeposit
     *   }
     * })
     * 
     */
    create<T extends TermDepositCreateArgs>(args: SelectSubset<T, TermDepositCreateArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermDeposits.
     * @param {TermDepositCreateManyArgs} args - Arguments to create many TermDeposits.
     * @example
     * // Create many TermDeposits
     * const termDeposit = await prisma.termDeposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermDepositCreateManyArgs>(args?: SelectSubset<T, TermDepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermDeposits and returns the data saved in the database.
     * @param {TermDepositCreateManyAndReturnArgs} args - Arguments to create many TermDeposits.
     * @example
     * // Create many TermDeposits
     * const termDeposit = await prisma.termDeposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermDeposits and only return the `id`
     * const termDepositWithIdOnly = await prisma.termDeposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermDepositCreateManyAndReturnArgs>(args?: SelectSubset<T, TermDepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermDeposit.
     * @param {TermDepositDeleteArgs} args - Arguments to delete one TermDeposit.
     * @example
     * // Delete one TermDeposit
     * const TermDeposit = await prisma.termDeposit.delete({
     *   where: {
     *     // ... filter to delete one TermDeposit
     *   }
     * })
     * 
     */
    delete<T extends TermDepositDeleteArgs>(args: SelectSubset<T, TermDepositDeleteArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermDeposit.
     * @param {TermDepositUpdateArgs} args - Arguments to update one TermDeposit.
     * @example
     * // Update one TermDeposit
     * const termDeposit = await prisma.termDeposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermDepositUpdateArgs>(args: SelectSubset<T, TermDepositUpdateArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermDeposits.
     * @param {TermDepositDeleteManyArgs} args - Arguments to filter TermDeposits to delete.
     * @example
     * // Delete a few TermDeposits
     * const { count } = await prisma.termDeposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermDepositDeleteManyArgs>(args?: SelectSubset<T, TermDepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermDeposits
     * const termDeposit = await prisma.termDeposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermDepositUpdateManyArgs>(args: SelectSubset<T, TermDepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermDeposits and returns the data updated in the database.
     * @param {TermDepositUpdateManyAndReturnArgs} args - Arguments to update many TermDeposits.
     * @example
     * // Update many TermDeposits
     * const termDeposit = await prisma.termDeposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermDeposits and only return the `id`
     * const termDepositWithIdOnly = await prisma.termDeposit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TermDepositUpdateManyAndReturnArgs>(args: SelectSubset<T, TermDepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermDeposit.
     * @param {TermDepositUpsertArgs} args - Arguments to update or create a TermDeposit.
     * @example
     * // Update or create a TermDeposit
     * const termDeposit = await prisma.termDeposit.upsert({
     *   create: {
     *     // ... data to create a TermDeposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermDeposit we want to update
     *   }
     * })
     */
    upsert<T extends TermDepositUpsertArgs>(args: SelectSubset<T, TermDepositUpsertArgs<ExtArgs>>): Prisma__TermDepositClient<$Result.GetResult<Prisma.$TermDepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermDeposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositCountArgs} args - Arguments to filter TermDeposits to count.
     * @example
     * // Count the number of TermDeposits
     * const count = await prisma.termDeposit.count({
     *   where: {
     *     // ... the filter for the TermDeposits we want to count
     *   }
     * })
    **/
    count<T extends TermDepositCountArgs>(
      args?: Subset<T, TermDepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermDepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermDepositAggregateArgs>(args: Subset<T, TermDepositAggregateArgs>): Prisma.PrismaPromise<GetTermDepositAggregateType<T>>

    /**
     * Group by TermDeposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermDepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TermDepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermDepositGroupByArgs['orderBy'] }
        : { orderBy?: TermDepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TermDepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermDeposit model
   */
  readonly fields: TermDepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermDeposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermDepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends TermDeposit$accountArgs<ExtArgs> = {}>(args?: Subset<T, TermDeposit$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TermDeposit model
   */
  interface TermDepositFieldRefs {
    readonly id: FieldRef<"TermDeposit", 'Int'>
    readonly clerkId: FieldRef<"TermDeposit", 'String'>
    readonly accountId: FieldRef<"TermDeposit", 'Int'>
    readonly name: FieldRef<"TermDeposit", 'String'>
    readonly type: FieldRef<"TermDeposit", 'InvestmentType'>
    readonly currency: FieldRef<"TermDeposit", 'Currency'>
    readonly institution: FieldRef<"TermDeposit", 'String'>
    readonly amountInvested: FieldRef<"TermDeposit", 'Float'>
    readonly interestRate: FieldRef<"TermDeposit", 'Float'>
    readonly termInMonths: FieldRef<"TermDeposit", 'Int'>
    readonly startDate: FieldRef<"TermDeposit", 'DateTime'>
    readonly endDate: FieldRef<"TermDeposit", 'DateTime'>
    readonly taxRate: FieldRef<"TermDeposit", 'Float'>
    readonly isActive: FieldRef<"TermDeposit", 'Boolean'>
    readonly createdAt: FieldRef<"TermDeposit", 'DateTime'>
    readonly updatedAt: FieldRef<"TermDeposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TermDeposit findUnique
   */
  export type TermDepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * Filter, which TermDeposit to fetch.
     */
    where: TermDepositWhereUniqueInput
  }

  /**
   * TermDeposit findUniqueOrThrow
   */
  export type TermDepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * Filter, which TermDeposit to fetch.
     */
    where: TermDepositWhereUniqueInput
  }

  /**
   * TermDeposit findFirst
   */
  export type TermDepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * Filter, which TermDeposit to fetch.
     */
    where?: TermDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermDeposits to fetch.
     */
    orderBy?: TermDepositOrderByWithRelationInput | TermDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermDeposits.
     */
    cursor?: TermDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermDeposits.
     */
    distinct?: TermDepositScalarFieldEnum | TermDepositScalarFieldEnum[]
  }

  /**
   * TermDeposit findFirstOrThrow
   */
  export type TermDepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * Filter, which TermDeposit to fetch.
     */
    where?: TermDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermDeposits to fetch.
     */
    orderBy?: TermDepositOrderByWithRelationInput | TermDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermDeposits.
     */
    cursor?: TermDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermDeposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermDeposits.
     */
    distinct?: TermDepositScalarFieldEnum | TermDepositScalarFieldEnum[]
  }

  /**
   * TermDeposit findMany
   */
  export type TermDepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * Filter, which TermDeposits to fetch.
     */
    where?: TermDepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermDeposits to fetch.
     */
    orderBy?: TermDepositOrderByWithRelationInput | TermDepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermDeposits.
     */
    cursor?: TermDepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermDeposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermDeposits.
     */
    skip?: number
    distinct?: TermDepositScalarFieldEnum | TermDepositScalarFieldEnum[]
  }

  /**
   * TermDeposit create
   */
  export type TermDepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * The data needed to create a TermDeposit.
     */
    data: XOR<TermDepositCreateInput, TermDepositUncheckedCreateInput>
  }

  /**
   * TermDeposit createMany
   */
  export type TermDepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermDeposits.
     */
    data: TermDepositCreateManyInput | TermDepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermDeposit createManyAndReturn
   */
  export type TermDepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * The data used to create many TermDeposits.
     */
    data: TermDepositCreateManyInput | TermDepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TermDeposit update
   */
  export type TermDepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * The data needed to update a TermDeposit.
     */
    data: XOR<TermDepositUpdateInput, TermDepositUncheckedUpdateInput>
    /**
     * Choose, which TermDeposit to update.
     */
    where: TermDepositWhereUniqueInput
  }

  /**
   * TermDeposit updateMany
   */
  export type TermDepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermDeposits.
     */
    data: XOR<TermDepositUpdateManyMutationInput, TermDepositUncheckedUpdateManyInput>
    /**
     * Filter which TermDeposits to update
     */
    where?: TermDepositWhereInput
    /**
     * Limit how many TermDeposits to update.
     */
    limit?: number
  }

  /**
   * TermDeposit updateManyAndReturn
   */
  export type TermDepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * The data used to update TermDeposits.
     */
    data: XOR<TermDepositUpdateManyMutationInput, TermDepositUncheckedUpdateManyInput>
    /**
     * Filter which TermDeposits to update
     */
    where?: TermDepositWhereInput
    /**
     * Limit how many TermDeposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TermDeposit upsert
   */
  export type TermDepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * The filter to search for the TermDeposit to update in case it exists.
     */
    where: TermDepositWhereUniqueInput
    /**
     * In case the TermDeposit found by the `where` argument doesn't exist, create a new TermDeposit with this data.
     */
    create: XOR<TermDepositCreateInput, TermDepositUncheckedCreateInput>
    /**
     * In case the TermDeposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermDepositUpdateInput, TermDepositUncheckedUpdateInput>
  }

  /**
   * TermDeposit delete
   */
  export type TermDepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
    /**
     * Filter which TermDeposit to delete.
     */
    where: TermDepositWhereUniqueInput
  }

  /**
   * TermDeposit deleteMany
   */
  export type TermDepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermDeposits to delete
     */
    where?: TermDepositWhereInput
    /**
     * Limit how many TermDeposits to delete.
     */
    limit?: number
  }

  /**
   * TermDeposit.account
   */
  export type TermDeposit$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * TermDeposit without action
   */
  export type TermDepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermDeposit
     */
    select?: TermDepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermDeposit
     */
    omit?: TermDepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermDepositInclude<ExtArgs> | null
  }


  /**
   * Model Bond
   */

  export type AggregateBond = {
    _count: BondCountAggregateOutputType | null
    _avg: BondAvgAggregateOutputType | null
    _sum: BondSumAggregateOutputType | null
    _min: BondMinAggregateOutputType | null
    _max: BondMaxAggregateOutputType | null
  }

  export type BondAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    numberOfUnits: number | null
    unitPrice: number | null
    interestRate: number | null
    initialFee: number | null
    taxRate: number | null
  }

  export type BondSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    numberOfUnits: number | null
    unitPrice: number | null
    interestRate: number | null
    initialFee: number | null
    taxRate: number | null
  }

  export type BondMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    accountId: number | null
    name: string | null
    type: $Enums.InvestmentType | null
    currency: $Enums.Currency | null
    institution: string | null
    numberOfUnits: number | null
    unitPrice: number | null
    interestRate: number | null
    initialFee: number | null
    taxRate: number | null
    startDate: Date | null
    endDate: Date | null
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BondMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    accountId: number | null
    name: string | null
    type: $Enums.InvestmentType | null
    currency: $Enums.Currency | null
    institution: string | null
    numberOfUnits: number | null
    unitPrice: number | null
    interestRate: number | null
    initialFee: number | null
    taxRate: number | null
    startDate: Date | null
    endDate: Date | null
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BondCountAggregateOutputType = {
    id: number
    clerkId: number
    accountId: number
    name: number
    type: number
    currency: number
    institution: number
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee: number
    taxRate: number
    startDate: number
    endDate: number
    frequencyOfInterestPayments: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BondAvgAggregateInputType = {
    id?: true
    accountId?: true
    numberOfUnits?: true
    unitPrice?: true
    interestRate?: true
    initialFee?: true
    taxRate?: true
  }

  export type BondSumAggregateInputType = {
    id?: true
    accountId?: true
    numberOfUnits?: true
    unitPrice?: true
    interestRate?: true
    initialFee?: true
    taxRate?: true
  }

  export type BondMinAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    institution?: true
    numberOfUnits?: true
    unitPrice?: true
    interestRate?: true
    initialFee?: true
    taxRate?: true
    startDate?: true
    endDate?: true
    frequencyOfInterestPayments?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BondMaxAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    institution?: true
    numberOfUnits?: true
    unitPrice?: true
    interestRate?: true
    initialFee?: true
    taxRate?: true
    startDate?: true
    endDate?: true
    frequencyOfInterestPayments?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BondCountAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    institution?: true
    numberOfUnits?: true
    unitPrice?: true
    interestRate?: true
    initialFee?: true
    taxRate?: true
    startDate?: true
    endDate?: true
    frequencyOfInterestPayments?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BondAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bond to aggregate.
     */
    where?: BondWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonds to fetch.
     */
    orderBy?: BondOrderByWithRelationInput | BondOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BondWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bonds
    **/
    _count?: true | BondCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BondAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BondSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BondMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BondMaxAggregateInputType
  }

  export type GetBondAggregateType<T extends BondAggregateArgs> = {
        [P in keyof T & keyof AggregateBond]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBond[P]>
      : GetScalarType<T[P], AggregateBond[P]>
  }




  export type BondGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BondWhereInput
    orderBy?: BondOrderByWithAggregationInput | BondOrderByWithAggregationInput[]
    by: BondScalarFieldEnum[] | BondScalarFieldEnum
    having?: BondScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BondCountAggregateInputType | true
    _avg?: BondAvgAggregateInputType
    _sum?: BondSumAggregateInputType
    _min?: BondMinAggregateInputType
    _max?: BondMaxAggregateInputType
  }

  export type BondGroupByOutputType = {
    id: number
    clerkId: string
    accountId: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee: number | null
    taxRate: number | null
    startDate: Date
    endDate: Date
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: BondCountAggregateOutputType | null
    _avg: BondAvgAggregateOutputType | null
    _sum: BondSumAggregateOutputType | null
    _min: BondMinAggregateOutputType | null
    _max: BondMaxAggregateOutputType | null
  }

  type GetBondGroupByPayload<T extends BondGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BondGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BondGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BondGroupByOutputType[P]>
            : GetScalarType<T[P], BondGroupByOutputType[P]>
        }
      >
    >


  export type BondSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    numberOfUnits?: boolean
    unitPrice?: boolean
    interestRate?: boolean
    initialFee?: boolean
    taxRate?: boolean
    startDate?: boolean
    endDate?: boolean
    frequencyOfInterestPayments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Bond$accountArgs<ExtArgs>
  }, ExtArgs["result"]["bond"]>

  export type BondSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    numberOfUnits?: boolean
    unitPrice?: boolean
    interestRate?: boolean
    initialFee?: boolean
    taxRate?: boolean
    startDate?: boolean
    endDate?: boolean
    frequencyOfInterestPayments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Bond$accountArgs<ExtArgs>
  }, ExtArgs["result"]["bond"]>

  export type BondSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    numberOfUnits?: boolean
    unitPrice?: boolean
    interestRate?: boolean
    initialFee?: boolean
    taxRate?: boolean
    startDate?: boolean
    endDate?: boolean
    frequencyOfInterestPayments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Bond$accountArgs<ExtArgs>
  }, ExtArgs["result"]["bond"]>

  export type BondSelectScalar = {
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    institution?: boolean
    numberOfUnits?: boolean
    unitPrice?: boolean
    interestRate?: boolean
    initialFee?: boolean
    taxRate?: boolean
    startDate?: boolean
    endDate?: boolean
    frequencyOfInterestPayments?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BondOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "accountId" | "name" | "type" | "currency" | "institution" | "numberOfUnits" | "unitPrice" | "interestRate" | "initialFee" | "taxRate" | "startDate" | "endDate" | "frequencyOfInterestPayments" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["bond"]>
  export type BondInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Bond$accountArgs<ExtArgs>
  }
  export type BondIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Bond$accountArgs<ExtArgs>
  }
  export type BondIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Bond$accountArgs<ExtArgs>
  }

  export type $BondPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bond"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      accountId: number | null
      name: string
      type: $Enums.InvestmentType
      currency: $Enums.Currency
      institution: string | null
      numberOfUnits: number
      unitPrice: number
      interestRate: number
      initialFee: number | null
      taxRate: number | null
      startDate: Date
      endDate: Date
      frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bond"]>
    composites: {}
  }

  type BondGetPayload<S extends boolean | null | undefined | BondDefaultArgs> = $Result.GetResult<Prisma.$BondPayload, S>

  type BondCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BondFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BondCountAggregateInputType | true
    }

  export interface BondDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bond'], meta: { name: 'Bond' } }
    /**
     * Find zero or one Bond that matches the filter.
     * @param {BondFindUniqueArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BondFindUniqueArgs>(args: SelectSubset<T, BondFindUniqueArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bond that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BondFindUniqueOrThrowArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BondFindUniqueOrThrowArgs>(args: SelectSubset<T, BondFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bond that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondFindFirstArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BondFindFirstArgs>(args?: SelectSubset<T, BondFindFirstArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bond that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondFindFirstOrThrowArgs} args - Arguments to find a Bond
     * @example
     * // Get one Bond
     * const bond = await prisma.bond.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BondFindFirstOrThrowArgs>(args?: SelectSubset<T, BondFindFirstOrThrowArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bonds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bonds
     * const bonds = await prisma.bond.findMany()
     * 
     * // Get first 10 Bonds
     * const bonds = await prisma.bond.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bondWithIdOnly = await prisma.bond.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BondFindManyArgs>(args?: SelectSubset<T, BondFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bond.
     * @param {BondCreateArgs} args - Arguments to create a Bond.
     * @example
     * // Create one Bond
     * const Bond = await prisma.bond.create({
     *   data: {
     *     // ... data to create a Bond
     *   }
     * })
     * 
     */
    create<T extends BondCreateArgs>(args: SelectSubset<T, BondCreateArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bonds.
     * @param {BondCreateManyArgs} args - Arguments to create many Bonds.
     * @example
     * // Create many Bonds
     * const bond = await prisma.bond.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BondCreateManyArgs>(args?: SelectSubset<T, BondCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bonds and returns the data saved in the database.
     * @param {BondCreateManyAndReturnArgs} args - Arguments to create many Bonds.
     * @example
     * // Create many Bonds
     * const bond = await prisma.bond.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bonds and only return the `id`
     * const bondWithIdOnly = await prisma.bond.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BondCreateManyAndReturnArgs>(args?: SelectSubset<T, BondCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bond.
     * @param {BondDeleteArgs} args - Arguments to delete one Bond.
     * @example
     * // Delete one Bond
     * const Bond = await prisma.bond.delete({
     *   where: {
     *     // ... filter to delete one Bond
     *   }
     * })
     * 
     */
    delete<T extends BondDeleteArgs>(args: SelectSubset<T, BondDeleteArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bond.
     * @param {BondUpdateArgs} args - Arguments to update one Bond.
     * @example
     * // Update one Bond
     * const bond = await prisma.bond.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BondUpdateArgs>(args: SelectSubset<T, BondUpdateArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bonds.
     * @param {BondDeleteManyArgs} args - Arguments to filter Bonds to delete.
     * @example
     * // Delete a few Bonds
     * const { count } = await prisma.bond.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BondDeleteManyArgs>(args?: SelectSubset<T, BondDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bonds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bonds
     * const bond = await prisma.bond.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BondUpdateManyArgs>(args: SelectSubset<T, BondUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bonds and returns the data updated in the database.
     * @param {BondUpdateManyAndReturnArgs} args - Arguments to update many Bonds.
     * @example
     * // Update many Bonds
     * const bond = await prisma.bond.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bonds and only return the `id`
     * const bondWithIdOnly = await prisma.bond.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BondUpdateManyAndReturnArgs>(args: SelectSubset<T, BondUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bond.
     * @param {BondUpsertArgs} args - Arguments to update or create a Bond.
     * @example
     * // Update or create a Bond
     * const bond = await prisma.bond.upsert({
     *   create: {
     *     // ... data to create a Bond
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bond we want to update
     *   }
     * })
     */
    upsert<T extends BondUpsertArgs>(args: SelectSubset<T, BondUpsertArgs<ExtArgs>>): Prisma__BondClient<$Result.GetResult<Prisma.$BondPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bonds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondCountArgs} args - Arguments to filter Bonds to count.
     * @example
     * // Count the number of Bonds
     * const count = await prisma.bond.count({
     *   where: {
     *     // ... the filter for the Bonds we want to count
     *   }
     * })
    **/
    count<T extends BondCountArgs>(
      args?: Subset<T, BondCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BondCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bond.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BondAggregateArgs>(args: Subset<T, BondAggregateArgs>): Prisma.PrismaPromise<GetBondAggregateType<T>>

    /**
     * Group by Bond.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BondGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BondGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BondGroupByArgs['orderBy'] }
        : { orderBy?: BondGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BondGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBondGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bond model
   */
  readonly fields: BondFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bond.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BondClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Bond$accountArgs<ExtArgs> = {}>(args?: Subset<T, Bond$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bond model
   */
  interface BondFieldRefs {
    readonly id: FieldRef<"Bond", 'Int'>
    readonly clerkId: FieldRef<"Bond", 'String'>
    readonly accountId: FieldRef<"Bond", 'Int'>
    readonly name: FieldRef<"Bond", 'String'>
    readonly type: FieldRef<"Bond", 'InvestmentType'>
    readonly currency: FieldRef<"Bond", 'Currency'>
    readonly institution: FieldRef<"Bond", 'String'>
    readonly numberOfUnits: FieldRef<"Bond", 'Int'>
    readonly unitPrice: FieldRef<"Bond", 'Float'>
    readonly interestRate: FieldRef<"Bond", 'Float'>
    readonly initialFee: FieldRef<"Bond", 'Float'>
    readonly taxRate: FieldRef<"Bond", 'Float'>
    readonly startDate: FieldRef<"Bond", 'DateTime'>
    readonly endDate: FieldRef<"Bond", 'DateTime'>
    readonly frequencyOfInterestPayments: FieldRef<"Bond", 'BondFrequencyOfInterestPayments'>
    readonly isActive: FieldRef<"Bond", 'Boolean'>
    readonly createdAt: FieldRef<"Bond", 'DateTime'>
    readonly updatedAt: FieldRef<"Bond", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bond findUnique
   */
  export type BondFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * Filter, which Bond to fetch.
     */
    where: BondWhereUniqueInput
  }

  /**
   * Bond findUniqueOrThrow
   */
  export type BondFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * Filter, which Bond to fetch.
     */
    where: BondWhereUniqueInput
  }

  /**
   * Bond findFirst
   */
  export type BondFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * Filter, which Bond to fetch.
     */
    where?: BondWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonds to fetch.
     */
    orderBy?: BondOrderByWithRelationInput | BondOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bonds.
     */
    cursor?: BondWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bonds.
     */
    distinct?: BondScalarFieldEnum | BondScalarFieldEnum[]
  }

  /**
   * Bond findFirstOrThrow
   */
  export type BondFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * Filter, which Bond to fetch.
     */
    where?: BondWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonds to fetch.
     */
    orderBy?: BondOrderByWithRelationInput | BondOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bonds.
     */
    cursor?: BondWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bonds.
     */
    distinct?: BondScalarFieldEnum | BondScalarFieldEnum[]
  }

  /**
   * Bond findMany
   */
  export type BondFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * Filter, which Bonds to fetch.
     */
    where?: BondWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonds to fetch.
     */
    orderBy?: BondOrderByWithRelationInput | BondOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bonds.
     */
    cursor?: BondWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonds.
     */
    skip?: number
    distinct?: BondScalarFieldEnum | BondScalarFieldEnum[]
  }

  /**
   * Bond create
   */
  export type BondCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * The data needed to create a Bond.
     */
    data: XOR<BondCreateInput, BondUncheckedCreateInput>
  }

  /**
   * Bond createMany
   */
  export type BondCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bonds.
     */
    data: BondCreateManyInput | BondCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bond createManyAndReturn
   */
  export type BondCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * The data used to create many Bonds.
     */
    data: BondCreateManyInput | BondCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bond update
   */
  export type BondUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * The data needed to update a Bond.
     */
    data: XOR<BondUpdateInput, BondUncheckedUpdateInput>
    /**
     * Choose, which Bond to update.
     */
    where: BondWhereUniqueInput
  }

  /**
   * Bond updateMany
   */
  export type BondUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bonds.
     */
    data: XOR<BondUpdateManyMutationInput, BondUncheckedUpdateManyInput>
    /**
     * Filter which Bonds to update
     */
    where?: BondWhereInput
    /**
     * Limit how many Bonds to update.
     */
    limit?: number
  }

  /**
   * Bond updateManyAndReturn
   */
  export type BondUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * The data used to update Bonds.
     */
    data: XOR<BondUpdateManyMutationInput, BondUncheckedUpdateManyInput>
    /**
     * Filter which Bonds to update
     */
    where?: BondWhereInput
    /**
     * Limit how many Bonds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bond upsert
   */
  export type BondUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * The filter to search for the Bond to update in case it exists.
     */
    where: BondWhereUniqueInput
    /**
     * In case the Bond found by the `where` argument doesn't exist, create a new Bond with this data.
     */
    create: XOR<BondCreateInput, BondUncheckedCreateInput>
    /**
     * In case the Bond was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BondUpdateInput, BondUncheckedUpdateInput>
  }

  /**
   * Bond delete
   */
  export type BondDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
    /**
     * Filter which Bond to delete.
     */
    where: BondWhereUniqueInput
  }

  /**
   * Bond deleteMany
   */
  export type BondDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bonds to delete
     */
    where?: BondWhereInput
    /**
     * Limit how many Bonds to delete.
     */
    limit?: number
  }

  /**
   * Bond.account
   */
  export type Bond$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Bond without action
   */
  export type BondDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bond
     */
    select?: BondSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bond
     */
    omit?: BondOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BondInclude<ExtArgs> | null
  }


  /**
   * Model Crypto
   */

  export type AggregateCrypto = {
    _count: CryptoCountAggregateOutputType | null
    _avg: CryptoAvgAggregateOutputType | null
    _sum: CryptoSumAggregateOutputType | null
    _min: CryptoMinAggregateOutputType | null
    _max: CryptoMaxAggregateOutputType | null
  }

  export type CryptoAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    amount: number | null
  }

  export type CryptoSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    amount: number | null
  }

  export type CryptoMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    accountId: number | null
    name: string | null
    type: $Enums.InvestmentType | null
    currency: $Enums.CryptoCurrency | null
    amount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CryptoMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    accountId: number | null
    name: string | null
    type: $Enums.InvestmentType | null
    currency: $Enums.CryptoCurrency | null
    amount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CryptoCountAggregateOutputType = {
    id: number
    clerkId: number
    accountId: number
    name: number
    type: number
    currency: number
    amount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CryptoAvgAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
  }

  export type CryptoSumAggregateInputType = {
    id?: true
    accountId?: true
    amount?: true
  }

  export type CryptoMinAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    amount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CryptoMaxAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    amount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CryptoCountAggregateInputType = {
    id?: true
    clerkId?: true
    accountId?: true
    name?: true
    type?: true
    currency?: true
    amount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CryptoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crypto to aggregate.
     */
    where?: CryptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptos to fetch.
     */
    orderBy?: CryptoOrderByWithRelationInput | CryptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cryptos
    **/
    _count?: true | CryptoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptoMaxAggregateInputType
  }

  export type GetCryptoAggregateType<T extends CryptoAggregateArgs> = {
        [P in keyof T & keyof AggregateCrypto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrypto[P]>
      : GetScalarType<T[P], AggregateCrypto[P]>
  }




  export type CryptoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWhereInput
    orderBy?: CryptoOrderByWithAggregationInput | CryptoOrderByWithAggregationInput[]
    by: CryptoScalarFieldEnum[] | CryptoScalarFieldEnum
    having?: CryptoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptoCountAggregateInputType | true
    _avg?: CryptoAvgAggregateInputType
    _sum?: CryptoSumAggregateInputType
    _min?: CryptoMinAggregateInputType
    _max?: CryptoMaxAggregateInputType
  }

  export type CryptoGroupByOutputType = {
    id: number
    clerkId: string
    accountId: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: CryptoCountAggregateOutputType | null
    _avg: CryptoAvgAggregateOutputType | null
    _sum: CryptoSumAggregateOutputType | null
    _min: CryptoMinAggregateOutputType | null
    _max: CryptoMaxAggregateOutputType | null
  }

  type GetCryptoGroupByPayload<T extends CryptoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptoGroupByOutputType[P]>
            : GetScalarType<T[P], CryptoGroupByOutputType[P]>
        }
      >
    >


  export type CryptoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Crypto$accountArgs<ExtArgs>
  }, ExtArgs["result"]["crypto"]>

  export type CryptoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Crypto$accountArgs<ExtArgs>
  }, ExtArgs["result"]["crypto"]>

  export type CryptoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | Crypto$accountArgs<ExtArgs>
  }, ExtArgs["result"]["crypto"]>

  export type CryptoSelectScalar = {
    id?: boolean
    clerkId?: boolean
    accountId?: boolean
    name?: boolean
    type?: boolean
    currency?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CryptoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "accountId" | "name" | "type" | "currency" | "amount" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["crypto"]>
  export type CryptoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Crypto$accountArgs<ExtArgs>
  }
  export type CryptoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Crypto$accountArgs<ExtArgs>
  }
  export type CryptoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | Crypto$accountArgs<ExtArgs>
  }

  export type $CryptoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crypto"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      accountId: number | null
      name: string
      type: $Enums.InvestmentType
      currency: $Enums.CryptoCurrency
      amount: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crypto"]>
    composites: {}
  }

  type CryptoGetPayload<S extends boolean | null | undefined | CryptoDefaultArgs> = $Result.GetResult<Prisma.$CryptoPayload, S>

  type CryptoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CryptoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CryptoCountAggregateInputType | true
    }

  export interface CryptoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crypto'], meta: { name: 'Crypto' } }
    /**
     * Find zero or one Crypto that matches the filter.
     * @param {CryptoFindUniqueArgs} args - Arguments to find a Crypto
     * @example
     * // Get one Crypto
     * const crypto = await prisma.crypto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CryptoFindUniqueArgs>(args: SelectSubset<T, CryptoFindUniqueArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Crypto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CryptoFindUniqueOrThrowArgs} args - Arguments to find a Crypto
     * @example
     * // Get one Crypto
     * const crypto = await prisma.crypto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CryptoFindUniqueOrThrowArgs>(args: SelectSubset<T, CryptoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crypto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoFindFirstArgs} args - Arguments to find a Crypto
     * @example
     * // Get one Crypto
     * const crypto = await prisma.crypto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CryptoFindFirstArgs>(args?: SelectSubset<T, CryptoFindFirstArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Crypto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoFindFirstOrThrowArgs} args - Arguments to find a Crypto
     * @example
     * // Get one Crypto
     * const crypto = await prisma.crypto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CryptoFindFirstOrThrowArgs>(args?: SelectSubset<T, CryptoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cryptos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cryptos
     * const cryptos = await prisma.crypto.findMany()
     * 
     * // Get first 10 Cryptos
     * const cryptos = await prisma.crypto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptoWithIdOnly = await prisma.crypto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CryptoFindManyArgs>(args?: SelectSubset<T, CryptoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Crypto.
     * @param {CryptoCreateArgs} args - Arguments to create a Crypto.
     * @example
     * // Create one Crypto
     * const Crypto = await prisma.crypto.create({
     *   data: {
     *     // ... data to create a Crypto
     *   }
     * })
     * 
     */
    create<T extends CryptoCreateArgs>(args: SelectSubset<T, CryptoCreateArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cryptos.
     * @param {CryptoCreateManyArgs} args - Arguments to create many Cryptos.
     * @example
     * // Create many Cryptos
     * const crypto = await prisma.crypto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CryptoCreateManyArgs>(args?: SelectSubset<T, CryptoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cryptos and returns the data saved in the database.
     * @param {CryptoCreateManyAndReturnArgs} args - Arguments to create many Cryptos.
     * @example
     * // Create many Cryptos
     * const crypto = await prisma.crypto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cryptos and only return the `id`
     * const cryptoWithIdOnly = await prisma.crypto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CryptoCreateManyAndReturnArgs>(args?: SelectSubset<T, CryptoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Crypto.
     * @param {CryptoDeleteArgs} args - Arguments to delete one Crypto.
     * @example
     * // Delete one Crypto
     * const Crypto = await prisma.crypto.delete({
     *   where: {
     *     // ... filter to delete one Crypto
     *   }
     * })
     * 
     */
    delete<T extends CryptoDeleteArgs>(args: SelectSubset<T, CryptoDeleteArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Crypto.
     * @param {CryptoUpdateArgs} args - Arguments to update one Crypto.
     * @example
     * // Update one Crypto
     * const crypto = await prisma.crypto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CryptoUpdateArgs>(args: SelectSubset<T, CryptoUpdateArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cryptos.
     * @param {CryptoDeleteManyArgs} args - Arguments to filter Cryptos to delete.
     * @example
     * // Delete a few Cryptos
     * const { count } = await prisma.crypto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CryptoDeleteManyArgs>(args?: SelectSubset<T, CryptoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cryptos
     * const crypto = await prisma.crypto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CryptoUpdateManyArgs>(args: SelectSubset<T, CryptoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptos and returns the data updated in the database.
     * @param {CryptoUpdateManyAndReturnArgs} args - Arguments to update many Cryptos.
     * @example
     * // Update many Cryptos
     * const crypto = await prisma.crypto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cryptos and only return the `id`
     * const cryptoWithIdOnly = await prisma.crypto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CryptoUpdateManyAndReturnArgs>(args: SelectSubset<T, CryptoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Crypto.
     * @param {CryptoUpsertArgs} args - Arguments to update or create a Crypto.
     * @example
     * // Update or create a Crypto
     * const crypto = await prisma.crypto.upsert({
     *   create: {
     *     // ... data to create a Crypto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crypto we want to update
     *   }
     * })
     */
    upsert<T extends CryptoUpsertArgs>(args: SelectSubset<T, CryptoUpsertArgs<ExtArgs>>): Prisma__CryptoClient<$Result.GetResult<Prisma.$CryptoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cryptos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoCountArgs} args - Arguments to filter Cryptos to count.
     * @example
     * // Count the number of Cryptos
     * const count = await prisma.crypto.count({
     *   where: {
     *     // ... the filter for the Cryptos we want to count
     *   }
     * })
    **/
    count<T extends CryptoCountArgs>(
      args?: Subset<T, CryptoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crypto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CryptoAggregateArgs>(args: Subset<T, CryptoAggregateArgs>): Prisma.PrismaPromise<GetCryptoAggregateType<T>>

    /**
     * Group by Crypto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CryptoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptoGroupByArgs['orderBy'] }
        : { orderBy?: CryptoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CryptoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crypto model
   */
  readonly fields: CryptoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crypto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends Crypto$accountArgs<ExtArgs> = {}>(args?: Subset<T, Crypto$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Crypto model
   */
  interface CryptoFieldRefs {
    readonly id: FieldRef<"Crypto", 'Int'>
    readonly clerkId: FieldRef<"Crypto", 'String'>
    readonly accountId: FieldRef<"Crypto", 'Int'>
    readonly name: FieldRef<"Crypto", 'String'>
    readonly type: FieldRef<"Crypto", 'InvestmentType'>
    readonly currency: FieldRef<"Crypto", 'CryptoCurrency'>
    readonly amount: FieldRef<"Crypto", 'Float'>
    readonly isActive: FieldRef<"Crypto", 'Boolean'>
    readonly createdAt: FieldRef<"Crypto", 'DateTime'>
    readonly updatedAt: FieldRef<"Crypto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crypto findUnique
   */
  export type CryptoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * Filter, which Crypto to fetch.
     */
    where: CryptoWhereUniqueInput
  }

  /**
   * Crypto findUniqueOrThrow
   */
  export type CryptoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * Filter, which Crypto to fetch.
     */
    where: CryptoWhereUniqueInput
  }

  /**
   * Crypto findFirst
   */
  export type CryptoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * Filter, which Crypto to fetch.
     */
    where?: CryptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptos to fetch.
     */
    orderBy?: CryptoOrderByWithRelationInput | CryptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptos.
     */
    cursor?: CryptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptos.
     */
    distinct?: CryptoScalarFieldEnum | CryptoScalarFieldEnum[]
  }

  /**
   * Crypto findFirstOrThrow
   */
  export type CryptoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * Filter, which Crypto to fetch.
     */
    where?: CryptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptos to fetch.
     */
    orderBy?: CryptoOrderByWithRelationInput | CryptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptos.
     */
    cursor?: CryptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptos.
     */
    distinct?: CryptoScalarFieldEnum | CryptoScalarFieldEnum[]
  }

  /**
   * Crypto findMany
   */
  export type CryptoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * Filter, which Cryptos to fetch.
     */
    where?: CryptoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptos to fetch.
     */
    orderBy?: CryptoOrderByWithRelationInput | CryptoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cryptos.
     */
    cursor?: CryptoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptos.
     */
    skip?: number
    distinct?: CryptoScalarFieldEnum | CryptoScalarFieldEnum[]
  }

  /**
   * Crypto create
   */
  export type CryptoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * The data needed to create a Crypto.
     */
    data: XOR<CryptoCreateInput, CryptoUncheckedCreateInput>
  }

  /**
   * Crypto createMany
   */
  export type CryptoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cryptos.
     */
    data: CryptoCreateManyInput | CryptoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crypto createManyAndReturn
   */
  export type CryptoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * The data used to create many Cryptos.
     */
    data: CryptoCreateManyInput | CryptoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crypto update
   */
  export type CryptoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * The data needed to update a Crypto.
     */
    data: XOR<CryptoUpdateInput, CryptoUncheckedUpdateInput>
    /**
     * Choose, which Crypto to update.
     */
    where: CryptoWhereUniqueInput
  }

  /**
   * Crypto updateMany
   */
  export type CryptoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cryptos.
     */
    data: XOR<CryptoUpdateManyMutationInput, CryptoUncheckedUpdateManyInput>
    /**
     * Filter which Cryptos to update
     */
    where?: CryptoWhereInput
    /**
     * Limit how many Cryptos to update.
     */
    limit?: number
  }

  /**
   * Crypto updateManyAndReturn
   */
  export type CryptoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * The data used to update Cryptos.
     */
    data: XOR<CryptoUpdateManyMutationInput, CryptoUncheckedUpdateManyInput>
    /**
     * Filter which Cryptos to update
     */
    where?: CryptoWhereInput
    /**
     * Limit how many Cryptos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Crypto upsert
   */
  export type CryptoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * The filter to search for the Crypto to update in case it exists.
     */
    where: CryptoWhereUniqueInput
    /**
     * In case the Crypto found by the `where` argument doesn't exist, create a new Crypto with this data.
     */
    create: XOR<CryptoCreateInput, CryptoUncheckedCreateInput>
    /**
     * In case the Crypto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptoUpdateInput, CryptoUncheckedUpdateInput>
  }

  /**
   * Crypto delete
   */
  export type CryptoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
    /**
     * Filter which Crypto to delete.
     */
    where: CryptoWhereUniqueInput
  }

  /**
   * Crypto deleteMany
   */
  export type CryptoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptos to delete
     */
    where?: CryptoWhereInput
    /**
     * Limit how many Cryptos to delete.
     */
    limit?: number
  }

  /**
   * Crypto.account
   */
  export type Crypto$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Crypto without action
   */
  export type CryptoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crypto
     */
    select?: CryptoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Crypto
     */
    omit?: CryptoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoInclude<ExtArgs> | null
  }


  /**
   * Model MonthlySnapshot
   */

  export type AggregateMonthlySnapshot = {
    _count: MonthlySnapshotCountAggregateOutputType | null
    _avg: MonthlySnapshotAvgAggregateOutputType | null
    _sum: MonthlySnapshotSumAggregateOutputType | null
    _min: MonthlySnapshotMinAggregateOutputType | null
    _max: MonthlySnapshotMaxAggregateOutputType | null
  }

  export type MonthlySnapshotAvgAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    totalBankAccounts: number | null
    totalCryptoValue: number | null
    totalBondsValue: number | null
    totalTermDepositsValue: number | null
    totalAssets: number | null
    totalLiabilities: number | null
    netWorth: number | null
  }

  export type MonthlySnapshotSumAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    totalBankAccounts: number | null
    totalCryptoValue: number | null
    totalBondsValue: number | null
    totalTermDepositsValue: number | null
    totalAssets: number | null
    totalLiabilities: number | null
    netWorth: number | null
  }

  export type MonthlySnapshotMinAggregateOutputType = {
    id: number | null
    clerkId: string | null
    year: number | null
    month: number | null
    totalBankAccounts: number | null
    totalCryptoValue: number | null
    totalBondsValue: number | null
    totalTermDepositsValue: number | null
    totalAssets: number | null
    totalLiabilities: number | null
    netWorth: number | null
    snapshotDate: Date | null
    createdAt: Date | null
  }

  export type MonthlySnapshotMaxAggregateOutputType = {
    id: number | null
    clerkId: string | null
    year: number | null
    month: number | null
    totalBankAccounts: number | null
    totalCryptoValue: number | null
    totalBondsValue: number | null
    totalTermDepositsValue: number | null
    totalAssets: number | null
    totalLiabilities: number | null
    netWorth: number | null
    snapshotDate: Date | null
    createdAt: Date | null
  }

  export type MonthlySnapshotCountAggregateOutputType = {
    id: number
    clerkId: number
    year: number
    month: number
    totalBankAccounts: number
    totalCryptoValue: number
    totalBondsValue: number
    totalTermDepositsValue: number
    totalAssets: number
    totalLiabilities: number
    netWorth: number
    snapshotDate: number
    createdAt: number
    _all: number
  }


  export type MonthlySnapshotAvgAggregateInputType = {
    id?: true
    year?: true
    month?: true
    totalBankAccounts?: true
    totalCryptoValue?: true
    totalBondsValue?: true
    totalTermDepositsValue?: true
    totalAssets?: true
    totalLiabilities?: true
    netWorth?: true
  }

  export type MonthlySnapshotSumAggregateInputType = {
    id?: true
    year?: true
    month?: true
    totalBankAccounts?: true
    totalCryptoValue?: true
    totalBondsValue?: true
    totalTermDepositsValue?: true
    totalAssets?: true
    totalLiabilities?: true
    netWorth?: true
  }

  export type MonthlySnapshotMinAggregateInputType = {
    id?: true
    clerkId?: true
    year?: true
    month?: true
    totalBankAccounts?: true
    totalCryptoValue?: true
    totalBondsValue?: true
    totalTermDepositsValue?: true
    totalAssets?: true
    totalLiabilities?: true
    netWorth?: true
    snapshotDate?: true
    createdAt?: true
  }

  export type MonthlySnapshotMaxAggregateInputType = {
    id?: true
    clerkId?: true
    year?: true
    month?: true
    totalBankAccounts?: true
    totalCryptoValue?: true
    totalBondsValue?: true
    totalTermDepositsValue?: true
    totalAssets?: true
    totalLiabilities?: true
    netWorth?: true
    snapshotDate?: true
    createdAt?: true
  }

  export type MonthlySnapshotCountAggregateInputType = {
    id?: true
    clerkId?: true
    year?: true
    month?: true
    totalBankAccounts?: true
    totalCryptoValue?: true
    totalBondsValue?: true
    totalTermDepositsValue?: true
    totalAssets?: true
    totalLiabilities?: true
    netWorth?: true
    snapshotDate?: true
    createdAt?: true
    _all?: true
  }

  export type MonthlySnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlySnapshot to aggregate.
     */
    where?: MonthlySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySnapshots to fetch.
     */
    orderBy?: MonthlySnapshotOrderByWithRelationInput | MonthlySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlySnapshots
    **/
    _count?: true | MonthlySnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlySnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlySnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlySnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlySnapshotMaxAggregateInputType
  }

  export type GetMonthlySnapshotAggregateType<T extends MonthlySnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlySnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlySnapshot[P]>
      : GetScalarType<T[P], AggregateMonthlySnapshot[P]>
  }




  export type MonthlySnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlySnapshotWhereInput
    orderBy?: MonthlySnapshotOrderByWithAggregationInput | MonthlySnapshotOrderByWithAggregationInput[]
    by: MonthlySnapshotScalarFieldEnum[] | MonthlySnapshotScalarFieldEnum
    having?: MonthlySnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlySnapshotCountAggregateInputType | true
    _avg?: MonthlySnapshotAvgAggregateInputType
    _sum?: MonthlySnapshotSumAggregateInputType
    _min?: MonthlySnapshotMinAggregateInputType
    _max?: MonthlySnapshotMaxAggregateInputType
  }

  export type MonthlySnapshotGroupByOutputType = {
    id: number
    clerkId: string
    year: number
    month: number
    totalBankAccounts: number
    totalCryptoValue: number
    totalBondsValue: number
    totalTermDepositsValue: number
    totalAssets: number
    totalLiabilities: number
    netWorth: number
    snapshotDate: Date
    createdAt: Date
    _count: MonthlySnapshotCountAggregateOutputType | null
    _avg: MonthlySnapshotAvgAggregateOutputType | null
    _sum: MonthlySnapshotSumAggregateOutputType | null
    _min: MonthlySnapshotMinAggregateOutputType | null
    _max: MonthlySnapshotMaxAggregateOutputType | null
  }

  type GetMonthlySnapshotGroupByPayload<T extends MonthlySnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlySnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlySnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlySnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlySnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MonthlySnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    year?: boolean
    month?: boolean
    totalBankAccounts?: boolean
    totalCryptoValue?: boolean
    totalBondsValue?: boolean
    totalTermDepositsValue?: boolean
    totalAssets?: boolean
    totalLiabilities?: boolean
    netWorth?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["monthlySnapshot"]>

  export type MonthlySnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    year?: boolean
    month?: boolean
    totalBankAccounts?: boolean
    totalCryptoValue?: boolean
    totalBondsValue?: boolean
    totalTermDepositsValue?: boolean
    totalAssets?: boolean
    totalLiabilities?: boolean
    netWorth?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["monthlySnapshot"]>

  export type MonthlySnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    year?: boolean
    month?: boolean
    totalBankAccounts?: boolean
    totalCryptoValue?: boolean
    totalBondsValue?: boolean
    totalTermDepositsValue?: boolean
    totalAssets?: boolean
    totalLiabilities?: boolean
    netWorth?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["monthlySnapshot"]>

  export type MonthlySnapshotSelectScalar = {
    id?: boolean
    clerkId?: boolean
    year?: boolean
    month?: boolean
    totalBankAccounts?: boolean
    totalCryptoValue?: boolean
    totalBondsValue?: boolean
    totalTermDepositsValue?: boolean
    totalAssets?: boolean
    totalLiabilities?: boolean
    netWorth?: boolean
    snapshotDate?: boolean
    createdAt?: boolean
  }

  export type MonthlySnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "year" | "month" | "totalBankAccounts" | "totalCryptoValue" | "totalBondsValue" | "totalTermDepositsValue" | "totalAssets" | "totalLiabilities" | "netWorth" | "snapshotDate" | "createdAt", ExtArgs["result"]["monthlySnapshot"]>

  export type $MonthlySnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlySnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clerkId: string
      year: number
      month: number
      totalBankAccounts: number
      totalCryptoValue: number
      totalBondsValue: number
      totalTermDepositsValue: number
      totalAssets: number
      totalLiabilities: number
      netWorth: number
      snapshotDate: Date
      createdAt: Date
    }, ExtArgs["result"]["monthlySnapshot"]>
    composites: {}
  }

  type MonthlySnapshotGetPayload<S extends boolean | null | undefined | MonthlySnapshotDefaultArgs> = $Result.GetResult<Prisma.$MonthlySnapshotPayload, S>

  type MonthlySnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlySnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlySnapshotCountAggregateInputType | true
    }

  export interface MonthlySnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlySnapshot'], meta: { name: 'MonthlySnapshot' } }
    /**
     * Find zero or one MonthlySnapshot that matches the filter.
     * @param {MonthlySnapshotFindUniqueArgs} args - Arguments to find a MonthlySnapshot
     * @example
     * // Get one MonthlySnapshot
     * const monthlySnapshot = await prisma.monthlySnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlySnapshotFindUniqueArgs>(args: SelectSubset<T, MonthlySnapshotFindUniqueArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlySnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlySnapshotFindUniqueOrThrowArgs} args - Arguments to find a MonthlySnapshot
     * @example
     * // Get one MonthlySnapshot
     * const monthlySnapshot = await prisma.monthlySnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlySnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlySnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlySnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotFindFirstArgs} args - Arguments to find a MonthlySnapshot
     * @example
     * // Get one MonthlySnapshot
     * const monthlySnapshot = await prisma.monthlySnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlySnapshotFindFirstArgs>(args?: SelectSubset<T, MonthlySnapshotFindFirstArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlySnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotFindFirstOrThrowArgs} args - Arguments to find a MonthlySnapshot
     * @example
     * // Get one MonthlySnapshot
     * const monthlySnapshot = await prisma.monthlySnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlySnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlySnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlySnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlySnapshots
     * const monthlySnapshots = await prisma.monthlySnapshot.findMany()
     * 
     * // Get first 10 MonthlySnapshots
     * const monthlySnapshots = await prisma.monthlySnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlySnapshotWithIdOnly = await prisma.monthlySnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlySnapshotFindManyArgs>(args?: SelectSubset<T, MonthlySnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlySnapshot.
     * @param {MonthlySnapshotCreateArgs} args - Arguments to create a MonthlySnapshot.
     * @example
     * // Create one MonthlySnapshot
     * const MonthlySnapshot = await prisma.monthlySnapshot.create({
     *   data: {
     *     // ... data to create a MonthlySnapshot
     *   }
     * })
     * 
     */
    create<T extends MonthlySnapshotCreateArgs>(args: SelectSubset<T, MonthlySnapshotCreateArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlySnapshots.
     * @param {MonthlySnapshotCreateManyArgs} args - Arguments to create many MonthlySnapshots.
     * @example
     * // Create many MonthlySnapshots
     * const monthlySnapshot = await prisma.monthlySnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlySnapshotCreateManyArgs>(args?: SelectSubset<T, MonthlySnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlySnapshots and returns the data saved in the database.
     * @param {MonthlySnapshotCreateManyAndReturnArgs} args - Arguments to create many MonthlySnapshots.
     * @example
     * // Create many MonthlySnapshots
     * const monthlySnapshot = await prisma.monthlySnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlySnapshots and only return the `id`
     * const monthlySnapshotWithIdOnly = await prisma.monthlySnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlySnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlySnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlySnapshot.
     * @param {MonthlySnapshotDeleteArgs} args - Arguments to delete one MonthlySnapshot.
     * @example
     * // Delete one MonthlySnapshot
     * const MonthlySnapshot = await prisma.monthlySnapshot.delete({
     *   where: {
     *     // ... filter to delete one MonthlySnapshot
     *   }
     * })
     * 
     */
    delete<T extends MonthlySnapshotDeleteArgs>(args: SelectSubset<T, MonthlySnapshotDeleteArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlySnapshot.
     * @param {MonthlySnapshotUpdateArgs} args - Arguments to update one MonthlySnapshot.
     * @example
     * // Update one MonthlySnapshot
     * const monthlySnapshot = await prisma.monthlySnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlySnapshotUpdateArgs>(args: SelectSubset<T, MonthlySnapshotUpdateArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlySnapshots.
     * @param {MonthlySnapshotDeleteManyArgs} args - Arguments to filter MonthlySnapshots to delete.
     * @example
     * // Delete a few MonthlySnapshots
     * const { count } = await prisma.monthlySnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlySnapshotDeleteManyArgs>(args?: SelectSubset<T, MonthlySnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlySnapshots
     * const monthlySnapshot = await prisma.monthlySnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlySnapshotUpdateManyArgs>(args: SelectSubset<T, MonthlySnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlySnapshots and returns the data updated in the database.
     * @param {MonthlySnapshotUpdateManyAndReturnArgs} args - Arguments to update many MonthlySnapshots.
     * @example
     * // Update many MonthlySnapshots
     * const monthlySnapshot = await prisma.monthlySnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlySnapshots and only return the `id`
     * const monthlySnapshotWithIdOnly = await prisma.monthlySnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlySnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlySnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlySnapshot.
     * @param {MonthlySnapshotUpsertArgs} args - Arguments to update or create a MonthlySnapshot.
     * @example
     * // Update or create a MonthlySnapshot
     * const monthlySnapshot = await prisma.monthlySnapshot.upsert({
     *   create: {
     *     // ... data to create a MonthlySnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlySnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MonthlySnapshotUpsertArgs>(args: SelectSubset<T, MonthlySnapshotUpsertArgs<ExtArgs>>): Prisma__MonthlySnapshotClient<$Result.GetResult<Prisma.$MonthlySnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlySnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotCountArgs} args - Arguments to filter MonthlySnapshots to count.
     * @example
     * // Count the number of MonthlySnapshots
     * const count = await prisma.monthlySnapshot.count({
     *   where: {
     *     // ... the filter for the MonthlySnapshots we want to count
     *   }
     * })
    **/
    count<T extends MonthlySnapshotCountArgs>(
      args?: Subset<T, MonthlySnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlySnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlySnapshotAggregateArgs>(args: Subset<T, MonthlySnapshotAggregateArgs>): Prisma.PrismaPromise<GetMonthlySnapshotAggregateType<T>>

    /**
     * Group by MonthlySnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlySnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlySnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlySnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MonthlySnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlySnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlySnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlySnapshot model
   */
  readonly fields: MonthlySnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlySnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlySnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlySnapshot model
   */
  interface MonthlySnapshotFieldRefs {
    readonly id: FieldRef<"MonthlySnapshot", 'Int'>
    readonly clerkId: FieldRef<"MonthlySnapshot", 'String'>
    readonly year: FieldRef<"MonthlySnapshot", 'Int'>
    readonly month: FieldRef<"MonthlySnapshot", 'Int'>
    readonly totalBankAccounts: FieldRef<"MonthlySnapshot", 'Float'>
    readonly totalCryptoValue: FieldRef<"MonthlySnapshot", 'Float'>
    readonly totalBondsValue: FieldRef<"MonthlySnapshot", 'Float'>
    readonly totalTermDepositsValue: FieldRef<"MonthlySnapshot", 'Float'>
    readonly totalAssets: FieldRef<"MonthlySnapshot", 'Float'>
    readonly totalLiabilities: FieldRef<"MonthlySnapshot", 'Float'>
    readonly netWorth: FieldRef<"MonthlySnapshot", 'Float'>
    readonly snapshotDate: FieldRef<"MonthlySnapshot", 'DateTime'>
    readonly createdAt: FieldRef<"MonthlySnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlySnapshot findUnique
   */
  export type MonthlySnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * Filter, which MonthlySnapshot to fetch.
     */
    where: MonthlySnapshotWhereUniqueInput
  }

  /**
   * MonthlySnapshot findUniqueOrThrow
   */
  export type MonthlySnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * Filter, which MonthlySnapshot to fetch.
     */
    where: MonthlySnapshotWhereUniqueInput
  }

  /**
   * MonthlySnapshot findFirst
   */
  export type MonthlySnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * Filter, which MonthlySnapshot to fetch.
     */
    where?: MonthlySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySnapshots to fetch.
     */
    orderBy?: MonthlySnapshotOrderByWithRelationInput | MonthlySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlySnapshots.
     */
    cursor?: MonthlySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlySnapshots.
     */
    distinct?: MonthlySnapshotScalarFieldEnum | MonthlySnapshotScalarFieldEnum[]
  }

  /**
   * MonthlySnapshot findFirstOrThrow
   */
  export type MonthlySnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * Filter, which MonthlySnapshot to fetch.
     */
    where?: MonthlySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySnapshots to fetch.
     */
    orderBy?: MonthlySnapshotOrderByWithRelationInput | MonthlySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlySnapshots.
     */
    cursor?: MonthlySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlySnapshots.
     */
    distinct?: MonthlySnapshotScalarFieldEnum | MonthlySnapshotScalarFieldEnum[]
  }

  /**
   * MonthlySnapshot findMany
   */
  export type MonthlySnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * Filter, which MonthlySnapshots to fetch.
     */
    where?: MonthlySnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlySnapshots to fetch.
     */
    orderBy?: MonthlySnapshotOrderByWithRelationInput | MonthlySnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlySnapshots.
     */
    cursor?: MonthlySnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlySnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlySnapshots.
     */
    skip?: number
    distinct?: MonthlySnapshotScalarFieldEnum | MonthlySnapshotScalarFieldEnum[]
  }

  /**
   * MonthlySnapshot create
   */
  export type MonthlySnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * The data needed to create a MonthlySnapshot.
     */
    data: XOR<MonthlySnapshotCreateInput, MonthlySnapshotUncheckedCreateInput>
  }

  /**
   * MonthlySnapshot createMany
   */
  export type MonthlySnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlySnapshots.
     */
    data: MonthlySnapshotCreateManyInput | MonthlySnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlySnapshot createManyAndReturn
   */
  export type MonthlySnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlySnapshots.
     */
    data: MonthlySnapshotCreateManyInput | MonthlySnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlySnapshot update
   */
  export type MonthlySnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * The data needed to update a MonthlySnapshot.
     */
    data: XOR<MonthlySnapshotUpdateInput, MonthlySnapshotUncheckedUpdateInput>
    /**
     * Choose, which MonthlySnapshot to update.
     */
    where: MonthlySnapshotWhereUniqueInput
  }

  /**
   * MonthlySnapshot updateMany
   */
  export type MonthlySnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlySnapshots.
     */
    data: XOR<MonthlySnapshotUpdateManyMutationInput, MonthlySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MonthlySnapshots to update
     */
    where?: MonthlySnapshotWhereInput
    /**
     * Limit how many MonthlySnapshots to update.
     */
    limit?: number
  }

  /**
   * MonthlySnapshot updateManyAndReturn
   */
  export type MonthlySnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * The data used to update MonthlySnapshots.
     */
    data: XOR<MonthlySnapshotUpdateManyMutationInput, MonthlySnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MonthlySnapshots to update
     */
    where?: MonthlySnapshotWhereInput
    /**
     * Limit how many MonthlySnapshots to update.
     */
    limit?: number
  }

  /**
   * MonthlySnapshot upsert
   */
  export type MonthlySnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * The filter to search for the MonthlySnapshot to update in case it exists.
     */
    where: MonthlySnapshotWhereUniqueInput
    /**
     * In case the MonthlySnapshot found by the `where` argument doesn't exist, create a new MonthlySnapshot with this data.
     */
    create: XOR<MonthlySnapshotCreateInput, MonthlySnapshotUncheckedCreateInput>
    /**
     * In case the MonthlySnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlySnapshotUpdateInput, MonthlySnapshotUncheckedUpdateInput>
  }

  /**
   * MonthlySnapshot delete
   */
  export type MonthlySnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
    /**
     * Filter which MonthlySnapshot to delete.
     */
    where: MonthlySnapshotWhereUniqueInput
  }

  /**
   * MonthlySnapshot deleteMany
   */
  export type MonthlySnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlySnapshots to delete
     */
    where?: MonthlySnapshotWhereInput
    /**
     * Limit how many MonthlySnapshots to delete.
     */
    limit?: number
  }

  /**
   * MonthlySnapshot without action
   */
  export type MonthlySnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlySnapshot
     */
    select?: MonthlySnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlySnapshot
     */
    omit?: MonthlySnapshotOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    language: 'language',
    currency: 'currency',
    incomeType: 'incomeType',
    incomeAmount: 'incomeAmount',
    incomeHourlyRate: 'incomeHourlyRate',
    workingHoursPerDay: 'workingHoursPerDay',
    incomeFrequency: 'incomeFrequency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    name: 'name',
    type: 'type',
    balance: 'balance',
    institution: 'institution',
    accountNumber: 'accountNumber',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const TermDepositScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    accountId: 'accountId',
    name: 'name',
    type: 'type',
    currency: 'currency',
    institution: 'institution',
    amountInvested: 'amountInvested',
    interestRate: 'interestRate',
    termInMonths: 'termInMonths',
    startDate: 'startDate',
    endDate: 'endDate',
    taxRate: 'taxRate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermDepositScalarFieldEnum = (typeof TermDepositScalarFieldEnum)[keyof typeof TermDepositScalarFieldEnum]


  export const BondScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    accountId: 'accountId',
    name: 'name',
    type: 'type',
    currency: 'currency',
    institution: 'institution',
    numberOfUnits: 'numberOfUnits',
    unitPrice: 'unitPrice',
    interestRate: 'interestRate',
    initialFee: 'initialFee',
    taxRate: 'taxRate',
    startDate: 'startDate',
    endDate: 'endDate',
    frequencyOfInterestPayments: 'frequencyOfInterestPayments',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BondScalarFieldEnum = (typeof BondScalarFieldEnum)[keyof typeof BondScalarFieldEnum]


  export const CryptoScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    accountId: 'accountId',
    name: 'name',
    type: 'type',
    currency: 'currency',
    amount: 'amount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CryptoScalarFieldEnum = (typeof CryptoScalarFieldEnum)[keyof typeof CryptoScalarFieldEnum]


  export const MonthlySnapshotScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    year: 'year',
    month: 'month',
    totalBankAccounts: 'totalBankAccounts',
    totalCryptoValue: 'totalCryptoValue',
    totalBondsValue: 'totalBondsValue',
    totalTermDepositsValue: 'totalTermDepositsValue',
    totalAssets: 'totalAssets',
    totalLiabilities: 'totalLiabilities',
    netWorth: 'netWorth',
    snapshotDate: 'snapshotDate',
    createdAt: 'createdAt'
  };

  export type MonthlySnapshotScalarFieldEnum = (typeof MonthlySnapshotScalarFieldEnum)[keyof typeof MonthlySnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'Currency'
   */
  export type EnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency'>
    


  /**
   * Reference to a field of type 'Currency[]'
   */
  export type ListEnumCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Currency[]'>
    


  /**
   * Reference to a field of type 'IncomeType'
   */
  export type EnumIncomeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeType'>
    


  /**
   * Reference to a field of type 'IncomeType[]'
   */
  export type ListEnumIncomeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'IncomeFrequency'
   */
  export type EnumIncomeFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeFrequency'>
    


  /**
   * Reference to a field of type 'IncomeFrequency[]'
   */
  export type ListEnumIncomeFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IncomeFrequency[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'AccountType[]'
   */
  export type ListEnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'InvestmentType'
   */
  export type EnumInvestmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentType'>
    


  /**
   * Reference to a field of type 'InvestmentType[]'
   */
  export type ListEnumInvestmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentType[]'>
    


  /**
   * Reference to a field of type 'BondFrequencyOfInterestPayments'
   */
  export type EnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BondFrequencyOfInterestPayments'>
    


  /**
   * Reference to a field of type 'BondFrequencyOfInterestPayments[]'
   */
  export type ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BondFrequencyOfInterestPayments[]'>
    


  /**
   * Reference to a field of type 'CryptoCurrency'
   */
  export type EnumCryptoCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CryptoCurrency'>
    


  /**
   * Reference to a field of type 'CryptoCurrency[]'
   */
  export type ListEnumCryptoCurrencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CryptoCurrency[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: IntFilter<"UserProfile"> | number
    clerkId?: StringFilter<"UserProfile"> | string
    name?: StringNullableFilter<"UserProfile"> | string | null
    language?: EnumLanguageFilter<"UserProfile"> | $Enums.Language
    currency?: EnumCurrencyFilter<"UserProfile"> | $Enums.Currency
    incomeType?: EnumIncomeTypeFilter<"UserProfile"> | $Enums.IncomeType
    incomeAmount?: FloatNullableFilter<"UserProfile"> | number | null
    incomeHourlyRate?: FloatNullableFilter<"UserProfile"> | number | null
    workingHoursPerDay?: IntNullableFilter<"UserProfile"> | number | null
    incomeFrequency?: EnumIncomeFrequencyFilter<"UserProfile"> | $Enums.IncomeFrequency
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrderInput | SortOrder
    language?: SortOrder
    currency?: SortOrder
    incomeType?: SortOrder
    incomeAmount?: SortOrderInput | SortOrder
    incomeHourlyRate?: SortOrderInput | SortOrder
    workingHoursPerDay?: SortOrderInput | SortOrder
    incomeFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    name?: StringNullableFilter<"UserProfile"> | string | null
    language?: EnumLanguageFilter<"UserProfile"> | $Enums.Language
    currency?: EnumCurrencyFilter<"UserProfile"> | $Enums.Currency
    incomeType?: EnumIncomeTypeFilter<"UserProfile"> | $Enums.IncomeType
    incomeAmount?: FloatNullableFilter<"UserProfile"> | number | null
    incomeHourlyRate?: FloatNullableFilter<"UserProfile"> | number | null
    workingHoursPerDay?: IntNullableFilter<"UserProfile"> | number | null
    incomeFrequency?: EnumIncomeFrequencyFilter<"UserProfile"> | $Enums.IncomeFrequency
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
  }, "id" | "clerkId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrderInput | SortOrder
    language?: SortOrder
    currency?: SortOrder
    incomeType?: SortOrder
    incomeAmount?: SortOrderInput | SortOrder
    incomeHourlyRate?: SortOrderInput | SortOrder
    workingHoursPerDay?: SortOrderInput | SortOrder
    incomeFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProfile"> | number
    clerkId?: StringWithAggregatesFilter<"UserProfile"> | string
    name?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    language?: EnumLanguageWithAggregatesFilter<"UserProfile"> | $Enums.Language
    currency?: EnumCurrencyWithAggregatesFilter<"UserProfile"> | $Enums.Currency
    incomeType?: EnumIncomeTypeWithAggregatesFilter<"UserProfile"> | $Enums.IncomeType
    incomeAmount?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    incomeHourlyRate?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    workingHoursPerDay?: IntNullableWithAggregatesFilter<"UserProfile"> | number | null
    incomeFrequency?: EnumIncomeFrequencyWithAggregatesFilter<"UserProfile"> | $Enums.IncomeFrequency
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    clerkId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    balance?: FloatFilter<"Account"> | number
    institution?: StringNullableFilter<"Account"> | string | null
    accountNumber?: StringNullableFilter<"Account"> | string | null
    isActive?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    termDeposit?: TermDepositListRelationFilter
    bond?: BondListRelationFilter
    crypto?: CryptoListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    institution?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    termDeposit?: TermDepositOrderByRelationAggregateInput
    bond?: BondOrderByRelationAggregateInput
    crypto?: CryptoOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    clerkId?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    balance?: FloatFilter<"Account"> | number
    institution?: StringNullableFilter<"Account"> | string | null
    accountNumber?: StringNullableFilter<"Account"> | string | null
    isActive?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    termDeposit?: TermDepositListRelationFilter
    bond?: BondListRelationFilter
    crypto?: CryptoListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    institution?: SortOrderInput | SortOrder
    accountNumber?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    clerkId?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    type?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    balance?: FloatWithAggregatesFilter<"Account"> | number
    institution?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accountNumber?: StringNullableWithAggregatesFilter<"Account"> | string | null
    isActive?: BoolWithAggregatesFilter<"Account"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type TermDepositWhereInput = {
    AND?: TermDepositWhereInput | TermDepositWhereInput[]
    OR?: TermDepositWhereInput[]
    NOT?: TermDepositWhereInput | TermDepositWhereInput[]
    id?: IntFilter<"TermDeposit"> | number
    clerkId?: StringFilter<"TermDeposit"> | string
    accountId?: IntNullableFilter<"TermDeposit"> | number | null
    name?: StringFilter<"TermDeposit"> | string
    type?: EnumInvestmentTypeFilter<"TermDeposit"> | $Enums.InvestmentType
    currency?: EnumCurrencyFilter<"TermDeposit"> | $Enums.Currency
    institution?: StringNullableFilter<"TermDeposit"> | string | null
    amountInvested?: FloatFilter<"TermDeposit"> | number
    interestRate?: FloatFilter<"TermDeposit"> | number
    termInMonths?: IntFilter<"TermDeposit"> | number
    startDate?: DateTimeFilter<"TermDeposit"> | Date | string
    endDate?: DateTimeFilter<"TermDeposit"> | Date | string
    taxRate?: FloatNullableFilter<"TermDeposit"> | number | null
    isActive?: BoolFilter<"TermDeposit"> | boolean
    createdAt?: DateTimeFilter<"TermDeposit"> | Date | string
    updatedAt?: DateTimeFilter<"TermDeposit"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type TermDepositOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrderInput | SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    taxRate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type TermDepositWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TermDepositWhereInput | TermDepositWhereInput[]
    OR?: TermDepositWhereInput[]
    NOT?: TermDepositWhereInput | TermDepositWhereInput[]
    clerkId?: StringFilter<"TermDeposit"> | string
    accountId?: IntNullableFilter<"TermDeposit"> | number | null
    name?: StringFilter<"TermDeposit"> | string
    type?: EnumInvestmentTypeFilter<"TermDeposit"> | $Enums.InvestmentType
    currency?: EnumCurrencyFilter<"TermDeposit"> | $Enums.Currency
    institution?: StringNullableFilter<"TermDeposit"> | string | null
    amountInvested?: FloatFilter<"TermDeposit"> | number
    interestRate?: FloatFilter<"TermDeposit"> | number
    termInMonths?: IntFilter<"TermDeposit"> | number
    startDate?: DateTimeFilter<"TermDeposit"> | Date | string
    endDate?: DateTimeFilter<"TermDeposit"> | Date | string
    taxRate?: FloatNullableFilter<"TermDeposit"> | number | null
    isActive?: BoolFilter<"TermDeposit"> | boolean
    createdAt?: DateTimeFilter<"TermDeposit"> | Date | string
    updatedAt?: DateTimeFilter<"TermDeposit"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type TermDepositOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrderInput | SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    taxRate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TermDepositCountOrderByAggregateInput
    _avg?: TermDepositAvgOrderByAggregateInput
    _max?: TermDepositMaxOrderByAggregateInput
    _min?: TermDepositMinOrderByAggregateInput
    _sum?: TermDepositSumOrderByAggregateInput
  }

  export type TermDepositScalarWhereWithAggregatesInput = {
    AND?: TermDepositScalarWhereWithAggregatesInput | TermDepositScalarWhereWithAggregatesInput[]
    OR?: TermDepositScalarWhereWithAggregatesInput[]
    NOT?: TermDepositScalarWhereWithAggregatesInput | TermDepositScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TermDeposit"> | number
    clerkId?: StringWithAggregatesFilter<"TermDeposit"> | string
    accountId?: IntNullableWithAggregatesFilter<"TermDeposit"> | number | null
    name?: StringWithAggregatesFilter<"TermDeposit"> | string
    type?: EnumInvestmentTypeWithAggregatesFilter<"TermDeposit"> | $Enums.InvestmentType
    currency?: EnumCurrencyWithAggregatesFilter<"TermDeposit"> | $Enums.Currency
    institution?: StringNullableWithAggregatesFilter<"TermDeposit"> | string | null
    amountInvested?: FloatWithAggregatesFilter<"TermDeposit"> | number
    interestRate?: FloatWithAggregatesFilter<"TermDeposit"> | number
    termInMonths?: IntWithAggregatesFilter<"TermDeposit"> | number
    startDate?: DateTimeWithAggregatesFilter<"TermDeposit"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"TermDeposit"> | Date | string
    taxRate?: FloatNullableWithAggregatesFilter<"TermDeposit"> | number | null
    isActive?: BoolWithAggregatesFilter<"TermDeposit"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TermDeposit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TermDeposit"> | Date | string
  }

  export type BondWhereInput = {
    AND?: BondWhereInput | BondWhereInput[]
    OR?: BondWhereInput[]
    NOT?: BondWhereInput | BondWhereInput[]
    id?: IntFilter<"Bond"> | number
    clerkId?: StringFilter<"Bond"> | string
    accountId?: IntNullableFilter<"Bond"> | number | null
    name?: StringFilter<"Bond"> | string
    type?: EnumInvestmentTypeFilter<"Bond"> | $Enums.InvestmentType
    currency?: EnumCurrencyFilter<"Bond"> | $Enums.Currency
    institution?: StringNullableFilter<"Bond"> | string | null
    numberOfUnits?: IntFilter<"Bond"> | number
    unitPrice?: FloatFilter<"Bond"> | number
    interestRate?: FloatFilter<"Bond"> | number
    initialFee?: FloatNullableFilter<"Bond"> | number | null
    taxRate?: FloatNullableFilter<"Bond"> | number | null
    startDate?: DateTimeFilter<"Bond"> | Date | string
    endDate?: DateTimeFilter<"Bond"> | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFilter<"Bond"> | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFilter<"Bond"> | boolean
    createdAt?: DateTimeFilter<"Bond"> | Date | string
    updatedAt?: DateTimeFilter<"Bond"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type BondOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrderInput | SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrderInput | SortOrder
    taxRate?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequencyOfInterestPayments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type BondWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BondWhereInput | BondWhereInput[]
    OR?: BondWhereInput[]
    NOT?: BondWhereInput | BondWhereInput[]
    clerkId?: StringFilter<"Bond"> | string
    accountId?: IntNullableFilter<"Bond"> | number | null
    name?: StringFilter<"Bond"> | string
    type?: EnumInvestmentTypeFilter<"Bond"> | $Enums.InvestmentType
    currency?: EnumCurrencyFilter<"Bond"> | $Enums.Currency
    institution?: StringNullableFilter<"Bond"> | string | null
    numberOfUnits?: IntFilter<"Bond"> | number
    unitPrice?: FloatFilter<"Bond"> | number
    interestRate?: FloatFilter<"Bond"> | number
    initialFee?: FloatNullableFilter<"Bond"> | number | null
    taxRate?: FloatNullableFilter<"Bond"> | number | null
    startDate?: DateTimeFilter<"Bond"> | Date | string
    endDate?: DateTimeFilter<"Bond"> | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFilter<"Bond"> | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFilter<"Bond"> | boolean
    createdAt?: DateTimeFilter<"Bond"> | Date | string
    updatedAt?: DateTimeFilter<"Bond"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type BondOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrderInput | SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrderInput | SortOrder
    taxRate?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequencyOfInterestPayments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BondCountOrderByAggregateInput
    _avg?: BondAvgOrderByAggregateInput
    _max?: BondMaxOrderByAggregateInput
    _min?: BondMinOrderByAggregateInput
    _sum?: BondSumOrderByAggregateInput
  }

  export type BondScalarWhereWithAggregatesInput = {
    AND?: BondScalarWhereWithAggregatesInput | BondScalarWhereWithAggregatesInput[]
    OR?: BondScalarWhereWithAggregatesInput[]
    NOT?: BondScalarWhereWithAggregatesInput | BondScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bond"> | number
    clerkId?: StringWithAggregatesFilter<"Bond"> | string
    accountId?: IntNullableWithAggregatesFilter<"Bond"> | number | null
    name?: StringWithAggregatesFilter<"Bond"> | string
    type?: EnumInvestmentTypeWithAggregatesFilter<"Bond"> | $Enums.InvestmentType
    currency?: EnumCurrencyWithAggregatesFilter<"Bond"> | $Enums.Currency
    institution?: StringNullableWithAggregatesFilter<"Bond"> | string | null
    numberOfUnits?: IntWithAggregatesFilter<"Bond"> | number
    unitPrice?: FloatWithAggregatesFilter<"Bond"> | number
    interestRate?: FloatWithAggregatesFilter<"Bond"> | number
    initialFee?: FloatNullableWithAggregatesFilter<"Bond"> | number | null
    taxRate?: FloatNullableWithAggregatesFilter<"Bond"> | number | null
    startDate?: DateTimeWithAggregatesFilter<"Bond"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Bond"> | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsWithAggregatesFilter<"Bond"> | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolWithAggregatesFilter<"Bond"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Bond"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bond"> | Date | string
  }

  export type CryptoWhereInput = {
    AND?: CryptoWhereInput | CryptoWhereInput[]
    OR?: CryptoWhereInput[]
    NOT?: CryptoWhereInput | CryptoWhereInput[]
    id?: IntFilter<"Crypto"> | number
    clerkId?: StringFilter<"Crypto"> | string
    accountId?: IntNullableFilter<"Crypto"> | number | null
    name?: StringFilter<"Crypto"> | string
    type?: EnumInvestmentTypeFilter<"Crypto"> | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFilter<"Crypto"> | $Enums.CryptoCurrency
    amount?: FloatFilter<"Crypto"> | number
    isActive?: BoolFilter<"Crypto"> | boolean
    createdAt?: DateTimeFilter<"Crypto"> | Date | string
    updatedAt?: DateTimeFilter<"Crypto"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }

  export type CryptoOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
  }

  export type CryptoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CryptoWhereInput | CryptoWhereInput[]
    OR?: CryptoWhereInput[]
    NOT?: CryptoWhereInput | CryptoWhereInput[]
    clerkId?: StringFilter<"Crypto"> | string
    accountId?: IntNullableFilter<"Crypto"> | number | null
    name?: StringFilter<"Crypto"> | string
    type?: EnumInvestmentTypeFilter<"Crypto"> | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFilter<"Crypto"> | $Enums.CryptoCurrency
    amount?: FloatFilter<"Crypto"> | number
    isActive?: BoolFilter<"Crypto"> | boolean
    createdAt?: DateTimeFilter<"Crypto"> | Date | string
    updatedAt?: DateTimeFilter<"Crypto"> | Date | string
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
  }, "id">

  export type CryptoOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CryptoCountOrderByAggregateInput
    _avg?: CryptoAvgOrderByAggregateInput
    _max?: CryptoMaxOrderByAggregateInput
    _min?: CryptoMinOrderByAggregateInput
    _sum?: CryptoSumOrderByAggregateInput
  }

  export type CryptoScalarWhereWithAggregatesInput = {
    AND?: CryptoScalarWhereWithAggregatesInput | CryptoScalarWhereWithAggregatesInput[]
    OR?: CryptoScalarWhereWithAggregatesInput[]
    NOT?: CryptoScalarWhereWithAggregatesInput | CryptoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Crypto"> | number
    clerkId?: StringWithAggregatesFilter<"Crypto"> | string
    accountId?: IntNullableWithAggregatesFilter<"Crypto"> | number | null
    name?: StringWithAggregatesFilter<"Crypto"> | string
    type?: EnumInvestmentTypeWithAggregatesFilter<"Crypto"> | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyWithAggregatesFilter<"Crypto"> | $Enums.CryptoCurrency
    amount?: FloatWithAggregatesFilter<"Crypto"> | number
    isActive?: BoolWithAggregatesFilter<"Crypto"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Crypto"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Crypto"> | Date | string
  }

  export type MonthlySnapshotWhereInput = {
    AND?: MonthlySnapshotWhereInput | MonthlySnapshotWhereInput[]
    OR?: MonthlySnapshotWhereInput[]
    NOT?: MonthlySnapshotWhereInput | MonthlySnapshotWhereInput[]
    id?: IntFilter<"MonthlySnapshot"> | number
    clerkId?: StringFilter<"MonthlySnapshot"> | string
    year?: IntFilter<"MonthlySnapshot"> | number
    month?: IntFilter<"MonthlySnapshot"> | number
    totalBankAccounts?: FloatFilter<"MonthlySnapshot"> | number
    totalCryptoValue?: FloatFilter<"MonthlySnapshot"> | number
    totalBondsValue?: FloatFilter<"MonthlySnapshot"> | number
    totalTermDepositsValue?: FloatFilter<"MonthlySnapshot"> | number
    totalAssets?: FloatFilter<"MonthlySnapshot"> | number
    totalLiabilities?: FloatFilter<"MonthlySnapshot"> | number
    netWorth?: FloatFilter<"MonthlySnapshot"> | number
    snapshotDate?: DateTimeFilter<"MonthlySnapshot"> | Date | string
    createdAt?: DateTimeFilter<"MonthlySnapshot"> | Date | string
  }

  export type MonthlySnapshotOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clerkId_year_month?: MonthlySnapshotClerkIdYearMonthCompoundUniqueInput
    AND?: MonthlySnapshotWhereInput | MonthlySnapshotWhereInput[]
    OR?: MonthlySnapshotWhereInput[]
    NOT?: MonthlySnapshotWhereInput | MonthlySnapshotWhereInput[]
    clerkId?: StringFilter<"MonthlySnapshot"> | string
    year?: IntFilter<"MonthlySnapshot"> | number
    month?: IntFilter<"MonthlySnapshot"> | number
    totalBankAccounts?: FloatFilter<"MonthlySnapshot"> | number
    totalCryptoValue?: FloatFilter<"MonthlySnapshot"> | number
    totalBondsValue?: FloatFilter<"MonthlySnapshot"> | number
    totalTermDepositsValue?: FloatFilter<"MonthlySnapshot"> | number
    totalAssets?: FloatFilter<"MonthlySnapshot"> | number
    totalLiabilities?: FloatFilter<"MonthlySnapshot"> | number
    netWorth?: FloatFilter<"MonthlySnapshot"> | number
    snapshotDate?: DateTimeFilter<"MonthlySnapshot"> | Date | string
    createdAt?: DateTimeFilter<"MonthlySnapshot"> | Date | string
  }, "id" | "clerkId_year_month">

  export type MonthlySnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
    _count?: MonthlySnapshotCountOrderByAggregateInput
    _avg?: MonthlySnapshotAvgOrderByAggregateInput
    _max?: MonthlySnapshotMaxOrderByAggregateInput
    _min?: MonthlySnapshotMinOrderByAggregateInput
    _sum?: MonthlySnapshotSumOrderByAggregateInput
  }

  export type MonthlySnapshotScalarWhereWithAggregatesInput = {
    AND?: MonthlySnapshotScalarWhereWithAggregatesInput | MonthlySnapshotScalarWhereWithAggregatesInput[]
    OR?: MonthlySnapshotScalarWhereWithAggregatesInput[]
    NOT?: MonthlySnapshotScalarWhereWithAggregatesInput | MonthlySnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MonthlySnapshot"> | number
    clerkId?: StringWithAggregatesFilter<"MonthlySnapshot"> | string
    year?: IntWithAggregatesFilter<"MonthlySnapshot"> | number
    month?: IntWithAggregatesFilter<"MonthlySnapshot"> | number
    totalBankAccounts?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    totalCryptoValue?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    totalBondsValue?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    totalTermDepositsValue?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    totalAssets?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    totalLiabilities?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    netWorth?: FloatWithAggregatesFilter<"MonthlySnapshot"> | number
    snapshotDate?: DateTimeWithAggregatesFilter<"MonthlySnapshot"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MonthlySnapshot"> | Date | string
  }

  export type UserProfileCreateInput = {
    clerkId: string
    name?: string | null
    language: $Enums.Language
    currency: $Enums.Currency
    incomeType: $Enums.IncomeType
    incomeAmount?: number | null
    incomeHourlyRate?: number | null
    workingHoursPerDay?: number | null
    incomeFrequency: $Enums.IncomeFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateInput = {
    id?: number
    clerkId: string
    name?: string | null
    language: $Enums.Language
    currency: $Enums.Currency
    incomeType: $Enums.IncomeType
    incomeAmount?: number | null
    incomeHourlyRate?: number | null
    workingHoursPerDay?: number | null
    incomeFrequency: $Enums.IncomeFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    incomeType?: EnumIncomeTypeFieldUpdateOperationsInput | $Enums.IncomeType
    incomeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    incomeHourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    workingHoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    incomeFrequency?: EnumIncomeFrequencyFieldUpdateOperationsInput | $Enums.IncomeFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    incomeType?: EnumIncomeTypeFieldUpdateOperationsInput | $Enums.IncomeType
    incomeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    incomeHourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    workingHoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    incomeFrequency?: EnumIncomeFrequencyFieldUpdateOperationsInput | $Enums.IncomeFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: number
    clerkId: string
    name?: string | null
    language: $Enums.Language
    currency: $Enums.Currency
    incomeType: $Enums.IncomeType
    incomeAmount?: number | null
    incomeHourlyRate?: number | null
    workingHoursPerDay?: number | null
    incomeFrequency: $Enums.IncomeFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    incomeType?: EnumIncomeTypeFieldUpdateOperationsInput | $Enums.IncomeType
    incomeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    incomeHourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    workingHoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    incomeFrequency?: EnumIncomeFrequencyFieldUpdateOperationsInput | $Enums.IncomeFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    incomeType?: EnumIncomeTypeFieldUpdateOperationsInput | $Enums.IncomeType
    incomeAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    incomeHourlyRate?: NullableFloatFieldUpdateOperationsInput | number | null
    workingHoursPerDay?: NullableIntFieldUpdateOperationsInput | number | null
    incomeFrequency?: EnumIncomeFrequencyFieldUpdateOperationsInput | $Enums.IncomeFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termDeposit?: TermDepositCreateNestedManyWithoutAccountInput
    bond?: BondCreateNestedManyWithoutAccountInput
    crypto?: CryptoCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termDeposit?: TermDepositUncheckedCreateNestedManyWithoutAccountInput
    bond?: BondUncheckedCreateNestedManyWithoutAccountInput
    crypto?: CryptoUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termDeposit?: TermDepositUpdateManyWithoutAccountNestedInput
    bond?: BondUpdateManyWithoutAccountNestedInput
    crypto?: CryptoUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termDeposit?: TermDepositUncheckedUpdateManyWithoutAccountNestedInput
    bond?: BondUncheckedUpdateManyWithoutAccountNestedInput
    crypto?: CryptoUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermDepositCreateInput = {
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    amountInvested?: number
    interestRate: number
    termInMonths: number
    startDate: Date | string
    endDate: Date | string
    taxRate?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutTermDepositInput
  }

  export type TermDepositUncheckedCreateInput = {
    id?: number
    clerkId: string
    accountId?: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    amountInvested?: number
    interestRate: number
    termInMonths: number
    startDate: Date | string
    endDate: Date | string
    taxRate?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermDepositUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutTermDepositNestedInput
  }

  export type TermDepositUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermDepositCreateManyInput = {
    id?: number
    clerkId: string
    accountId?: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    amountInvested?: number
    interestRate: number
    termInMonths: number
    startDate: Date | string
    endDate: Date | string
    taxRate?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermDepositUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermDepositUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BondCreateInput = {
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee?: number | null
    taxRate?: number | null
    startDate: Date | string
    endDate: Date | string
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutBondInput
  }

  export type BondUncheckedCreateInput = {
    id?: number
    clerkId: string
    accountId?: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee?: number | null
    taxRate?: number | null
    startDate: Date | string
    endDate: Date | string
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BondUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutBondNestedInput
  }

  export type BondUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BondCreateManyInput = {
    id?: number
    clerkId: string
    accountId?: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee?: number | null
    taxRate?: number | null
    startDate: Date | string
    endDate: Date | string
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BondUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BondUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoCreateInput = {
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutCryptoInput
  }

  export type CryptoUncheckedCreateInput = {
    id?: number
    clerkId: string
    accountId?: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CryptoUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutCryptoNestedInput
  }

  export type CryptoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoCreateManyInput = {
    id?: number
    clerkId: string
    accountId?: number | null
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CryptoUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySnapshotCreateInput = {
    clerkId: string
    year: number
    month: number
    totalBankAccounts?: number
    totalCryptoValue?: number
    totalBondsValue?: number
    totalTermDepositsValue?: number
    totalAssets?: number
    totalLiabilities?: number
    netWorth?: number
    snapshotDate: Date | string
    createdAt?: Date | string
  }

  export type MonthlySnapshotUncheckedCreateInput = {
    id?: number
    clerkId: string
    year: number
    month: number
    totalBankAccounts?: number
    totalCryptoValue?: number
    totalBondsValue?: number
    totalTermDepositsValue?: number
    totalAssets?: number
    totalLiabilities?: number
    netWorth?: number
    snapshotDate: Date | string
    createdAt?: Date | string
  }

  export type MonthlySnapshotUpdateInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalBankAccounts?: FloatFieldUpdateOperationsInput | number
    totalCryptoValue?: FloatFieldUpdateOperationsInput | number
    totalBondsValue?: FloatFieldUpdateOperationsInput | number
    totalTermDepositsValue?: FloatFieldUpdateOperationsInput | number
    totalAssets?: FloatFieldUpdateOperationsInput | number
    totalLiabilities?: FloatFieldUpdateOperationsInput | number
    netWorth?: FloatFieldUpdateOperationsInput | number
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalBankAccounts?: FloatFieldUpdateOperationsInput | number
    totalCryptoValue?: FloatFieldUpdateOperationsInput | number
    totalBondsValue?: FloatFieldUpdateOperationsInput | number
    totalTermDepositsValue?: FloatFieldUpdateOperationsInput | number
    totalAssets?: FloatFieldUpdateOperationsInput | number
    totalLiabilities?: FloatFieldUpdateOperationsInput | number
    netWorth?: FloatFieldUpdateOperationsInput | number
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySnapshotCreateManyInput = {
    id?: number
    clerkId: string
    year: number
    month: number
    totalBankAccounts?: number
    totalCryptoValue?: number
    totalBondsValue?: number
    totalTermDepositsValue?: number
    totalAssets?: number
    totalLiabilities?: number
    netWorth?: number
    snapshotDate: Date | string
    createdAt?: Date | string
  }

  export type MonthlySnapshotUpdateManyMutationInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalBankAccounts?: FloatFieldUpdateOperationsInput | number
    totalCryptoValue?: FloatFieldUpdateOperationsInput | number
    totalBondsValue?: FloatFieldUpdateOperationsInput | number
    totalTermDepositsValue?: FloatFieldUpdateOperationsInput | number
    totalAssets?: FloatFieldUpdateOperationsInput | number
    totalLiabilities?: FloatFieldUpdateOperationsInput | number
    netWorth?: FloatFieldUpdateOperationsInput | number
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlySnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    totalBankAccounts?: FloatFieldUpdateOperationsInput | number
    totalCryptoValue?: FloatFieldUpdateOperationsInput | number
    totalBondsValue?: FloatFieldUpdateOperationsInput | number
    totalTermDepositsValue?: FloatFieldUpdateOperationsInput | number
    totalAssets?: FloatFieldUpdateOperationsInput | number
    totalLiabilities?: FloatFieldUpdateOperationsInput | number
    netWorth?: FloatFieldUpdateOperationsInput | number
    snapshotDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type EnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type EnumIncomeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeType | EnumIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeTypeFilter<$PrismaModel> | $Enums.IncomeType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumIncomeFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeFrequency | EnumIncomeFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeFrequencyFilter<$PrismaModel> | $Enums.IncomeFrequency
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    incomeType?: SortOrder
    incomeAmount?: SortOrder
    incomeHourlyRate?: SortOrder
    workingHoursPerDay?: SortOrder
    incomeFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    incomeAmount?: SortOrder
    incomeHourlyRate?: SortOrder
    workingHoursPerDay?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    incomeType?: SortOrder
    incomeAmount?: SortOrder
    incomeHourlyRate?: SortOrder
    workingHoursPerDay?: SortOrder
    incomeFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    language?: SortOrder
    currency?: SortOrder
    incomeType?: SortOrder
    incomeAmount?: SortOrder
    incomeHourlyRate?: SortOrder
    workingHoursPerDay?: SortOrder
    incomeFrequency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    id?: SortOrder
    incomeAmount?: SortOrder
    incomeHourlyRate?: SortOrder
    workingHoursPerDay?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type EnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type EnumIncomeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeType | EnumIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncomeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncomeTypeFilter<$PrismaModel>
    _max?: NestedEnumIncomeTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumIncomeFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeFrequency | EnumIncomeFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.IncomeFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncomeFrequencyFilter<$PrismaModel>
    _max?: NestedEnumIncomeFrequencyFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TermDepositListRelationFilter = {
    every?: TermDepositWhereInput
    some?: TermDepositWhereInput
    none?: TermDepositWhereInput
  }

  export type BondListRelationFilter = {
    every?: BondWhereInput
    some?: BondWhereInput
    none?: BondWhereInput
  }

  export type CryptoListRelationFilter = {
    every?: CryptoWhereInput
    some?: CryptoWhereInput
    none?: CryptoWhereInput
  }

  export type TermDepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BondOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CryptoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    institution?: SortOrder
    accountNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    institution?: SortOrder
    accountNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    balance?: SortOrder
    institution?: SortOrder
    accountNumber?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumInvestmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeFilter<$PrismaModel> | $Enums.InvestmentType
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type TermDepositCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    taxRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermDepositAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    taxRate?: SortOrder
  }

  export type TermDepositMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    taxRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermDepositMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    taxRate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TermDepositSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amountInvested?: SortOrder
    interestRate?: SortOrder
    termInMonths?: SortOrder
    taxRate?: SortOrder
  }

  export type EnumInvestmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentTypeFilter<$PrismaModel>
    _max?: NestedEnumInvestmentTypeFilter<$PrismaModel>
  }

  export type EnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel = never> = {
    equals?: $Enums.BondFrequencyOfInterestPayments | EnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    in?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    not?: NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel> | $Enums.BondFrequencyOfInterestPayments
  }

  export type BondCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrder
    taxRate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequencyOfInterestPayments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BondAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrder
    taxRate?: SortOrder
  }

  export type BondMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrder
    taxRate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequencyOfInterestPayments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BondMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    institution?: SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrder
    taxRate?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequencyOfInterestPayments?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BondSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    numberOfUnits?: SortOrder
    unitPrice?: SortOrder
    interestRate?: SortOrder
    initialFee?: SortOrder
    taxRate?: SortOrder
  }

  export type EnumBondFrequencyOfInterestPaymentsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BondFrequencyOfInterestPayments | EnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    in?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    not?: NestedEnumBondFrequencyOfInterestPaymentsWithAggregatesFilter<$PrismaModel> | $Enums.BondFrequencyOfInterestPayments
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel>
    _max?: NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel>
  }

  export type EnumCryptoCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCryptoCurrencyFilter<$PrismaModel> | $Enums.CryptoCurrency
  }

  export type CryptoCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CryptoAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
  }

  export type CryptoMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CryptoMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    accountId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    currency?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CryptoSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    amount?: SortOrder
  }

  export type EnumCryptoCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCryptoCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.CryptoCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
  }

  export type MonthlySnapshotClerkIdYearMonthCompoundUniqueInput = {
    clerkId: string
    year: number
    month: number
  }

  export type MonthlySnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
  }

  export type MonthlySnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
    snapshotDate?: SortOrder
    createdAt?: SortOrder
  }

  export type MonthlySnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    totalBankAccounts?: SortOrder
    totalCryptoValue?: SortOrder
    totalBondsValue?: SortOrder
    totalTermDepositsValue?: SortOrder
    totalAssets?: SortOrder
    totalLiabilities?: SortOrder
    netWorth?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type EnumCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.Currency
  }

  export type EnumIncomeTypeFieldUpdateOperationsInput = {
    set?: $Enums.IncomeType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumIncomeFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.IncomeFrequency
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TermDepositCreateNestedManyWithoutAccountInput = {
    create?: XOR<TermDepositCreateWithoutAccountInput, TermDepositUncheckedCreateWithoutAccountInput> | TermDepositCreateWithoutAccountInput[] | TermDepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TermDepositCreateOrConnectWithoutAccountInput | TermDepositCreateOrConnectWithoutAccountInput[]
    createMany?: TermDepositCreateManyAccountInputEnvelope
    connect?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
  }

  export type BondCreateNestedManyWithoutAccountInput = {
    create?: XOR<BondCreateWithoutAccountInput, BondUncheckedCreateWithoutAccountInput> | BondCreateWithoutAccountInput[] | BondUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BondCreateOrConnectWithoutAccountInput | BondCreateOrConnectWithoutAccountInput[]
    createMany?: BondCreateManyAccountInputEnvelope
    connect?: BondWhereUniqueInput | BondWhereUniqueInput[]
  }

  export type CryptoCreateNestedManyWithoutAccountInput = {
    create?: XOR<CryptoCreateWithoutAccountInput, CryptoUncheckedCreateWithoutAccountInput> | CryptoCreateWithoutAccountInput[] | CryptoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CryptoCreateOrConnectWithoutAccountInput | CryptoCreateOrConnectWithoutAccountInput[]
    createMany?: CryptoCreateManyAccountInputEnvelope
    connect?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
  }

  export type TermDepositUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TermDepositCreateWithoutAccountInput, TermDepositUncheckedCreateWithoutAccountInput> | TermDepositCreateWithoutAccountInput[] | TermDepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TermDepositCreateOrConnectWithoutAccountInput | TermDepositCreateOrConnectWithoutAccountInput[]
    createMany?: TermDepositCreateManyAccountInputEnvelope
    connect?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
  }

  export type BondUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<BondCreateWithoutAccountInput, BondUncheckedCreateWithoutAccountInput> | BondCreateWithoutAccountInput[] | BondUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BondCreateOrConnectWithoutAccountInput | BondCreateOrConnectWithoutAccountInput[]
    createMany?: BondCreateManyAccountInputEnvelope
    connect?: BondWhereUniqueInput | BondWhereUniqueInput[]
  }

  export type CryptoUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CryptoCreateWithoutAccountInput, CryptoUncheckedCreateWithoutAccountInput> | CryptoCreateWithoutAccountInput[] | CryptoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CryptoCreateOrConnectWithoutAccountInput | CryptoCreateOrConnectWithoutAccountInput[]
    createMany?: CryptoCreateManyAccountInputEnvelope
    connect?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TermDepositUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TermDepositCreateWithoutAccountInput, TermDepositUncheckedCreateWithoutAccountInput> | TermDepositCreateWithoutAccountInput[] | TermDepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TermDepositCreateOrConnectWithoutAccountInput | TermDepositCreateOrConnectWithoutAccountInput[]
    upsert?: TermDepositUpsertWithWhereUniqueWithoutAccountInput | TermDepositUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TermDepositCreateManyAccountInputEnvelope
    set?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    disconnect?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    delete?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    connect?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    update?: TermDepositUpdateWithWhereUniqueWithoutAccountInput | TermDepositUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TermDepositUpdateManyWithWhereWithoutAccountInput | TermDepositUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TermDepositScalarWhereInput | TermDepositScalarWhereInput[]
  }

  export type BondUpdateManyWithoutAccountNestedInput = {
    create?: XOR<BondCreateWithoutAccountInput, BondUncheckedCreateWithoutAccountInput> | BondCreateWithoutAccountInput[] | BondUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BondCreateOrConnectWithoutAccountInput | BondCreateOrConnectWithoutAccountInput[]
    upsert?: BondUpsertWithWhereUniqueWithoutAccountInput | BondUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: BondCreateManyAccountInputEnvelope
    set?: BondWhereUniqueInput | BondWhereUniqueInput[]
    disconnect?: BondWhereUniqueInput | BondWhereUniqueInput[]
    delete?: BondWhereUniqueInput | BondWhereUniqueInput[]
    connect?: BondWhereUniqueInput | BondWhereUniqueInput[]
    update?: BondUpdateWithWhereUniqueWithoutAccountInput | BondUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: BondUpdateManyWithWhereWithoutAccountInput | BondUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: BondScalarWhereInput | BondScalarWhereInput[]
  }

  export type CryptoUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CryptoCreateWithoutAccountInput, CryptoUncheckedCreateWithoutAccountInput> | CryptoCreateWithoutAccountInput[] | CryptoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CryptoCreateOrConnectWithoutAccountInput | CryptoCreateOrConnectWithoutAccountInput[]
    upsert?: CryptoUpsertWithWhereUniqueWithoutAccountInput | CryptoUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CryptoCreateManyAccountInputEnvelope
    set?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    disconnect?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    delete?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    connect?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    update?: CryptoUpdateWithWhereUniqueWithoutAccountInput | CryptoUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CryptoUpdateManyWithWhereWithoutAccountInput | CryptoUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CryptoScalarWhereInput | CryptoScalarWhereInput[]
  }

  export type TermDepositUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TermDepositCreateWithoutAccountInput, TermDepositUncheckedCreateWithoutAccountInput> | TermDepositCreateWithoutAccountInput[] | TermDepositUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TermDepositCreateOrConnectWithoutAccountInput | TermDepositCreateOrConnectWithoutAccountInput[]
    upsert?: TermDepositUpsertWithWhereUniqueWithoutAccountInput | TermDepositUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TermDepositCreateManyAccountInputEnvelope
    set?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    disconnect?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    delete?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    connect?: TermDepositWhereUniqueInput | TermDepositWhereUniqueInput[]
    update?: TermDepositUpdateWithWhereUniqueWithoutAccountInput | TermDepositUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TermDepositUpdateManyWithWhereWithoutAccountInput | TermDepositUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TermDepositScalarWhereInput | TermDepositScalarWhereInput[]
  }

  export type BondUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<BondCreateWithoutAccountInput, BondUncheckedCreateWithoutAccountInput> | BondCreateWithoutAccountInput[] | BondUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: BondCreateOrConnectWithoutAccountInput | BondCreateOrConnectWithoutAccountInput[]
    upsert?: BondUpsertWithWhereUniqueWithoutAccountInput | BondUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: BondCreateManyAccountInputEnvelope
    set?: BondWhereUniqueInput | BondWhereUniqueInput[]
    disconnect?: BondWhereUniqueInput | BondWhereUniqueInput[]
    delete?: BondWhereUniqueInput | BondWhereUniqueInput[]
    connect?: BondWhereUniqueInput | BondWhereUniqueInput[]
    update?: BondUpdateWithWhereUniqueWithoutAccountInput | BondUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: BondUpdateManyWithWhereWithoutAccountInput | BondUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: BondScalarWhereInput | BondScalarWhereInput[]
  }

  export type CryptoUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CryptoCreateWithoutAccountInput, CryptoUncheckedCreateWithoutAccountInput> | CryptoCreateWithoutAccountInput[] | CryptoUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CryptoCreateOrConnectWithoutAccountInput | CryptoCreateOrConnectWithoutAccountInput[]
    upsert?: CryptoUpsertWithWhereUniqueWithoutAccountInput | CryptoUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CryptoCreateManyAccountInputEnvelope
    set?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    disconnect?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    delete?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    connect?: CryptoWhereUniqueInput | CryptoWhereUniqueInput[]
    update?: CryptoUpdateWithWhereUniqueWithoutAccountInput | CryptoUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CryptoUpdateManyWithWhereWithoutAccountInput | CryptoUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CryptoScalarWhereInput | CryptoScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutTermDepositInput = {
    create?: XOR<AccountCreateWithoutTermDepositInput, AccountUncheckedCreateWithoutTermDepositInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTermDepositInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumInvestmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentType
  }

  export type AccountUpdateOneWithoutTermDepositNestedInput = {
    create?: XOR<AccountCreateWithoutTermDepositInput, AccountUncheckedCreateWithoutTermDepositInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTermDepositInput
    upsert?: AccountUpsertWithoutTermDepositInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTermDepositInput, AccountUpdateWithoutTermDepositInput>, AccountUncheckedUpdateWithoutTermDepositInput>
  }

  export type AccountCreateNestedOneWithoutBondInput = {
    create?: XOR<AccountCreateWithoutBondInput, AccountUncheckedCreateWithoutBondInput>
    connectOrCreate?: AccountCreateOrConnectWithoutBondInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput = {
    set?: $Enums.BondFrequencyOfInterestPayments
  }

  export type AccountUpdateOneWithoutBondNestedInput = {
    create?: XOR<AccountCreateWithoutBondInput, AccountUncheckedCreateWithoutBondInput>
    connectOrCreate?: AccountCreateOrConnectWithoutBondInput
    upsert?: AccountUpsertWithoutBondInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutBondInput, AccountUpdateWithoutBondInput>, AccountUncheckedUpdateWithoutBondInput>
  }

  export type AccountCreateNestedOneWithoutCryptoInput = {
    create?: XOR<AccountCreateWithoutCryptoInput, AccountUncheckedCreateWithoutCryptoInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCryptoInput
    connect?: AccountWhereUniqueInput
  }

  export type EnumCryptoCurrencyFieldUpdateOperationsInput = {
    set?: $Enums.CryptoCurrency
  }

  export type AccountUpdateOneWithoutCryptoNestedInput = {
    create?: XOR<AccountCreateWithoutCryptoInput, AccountUncheckedCreateWithoutCryptoInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCryptoInput
    upsert?: AccountUpsertWithoutCryptoInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCryptoInput, AccountUpdateWithoutCryptoInput>, AccountUncheckedUpdateWithoutCryptoInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
  }

  export type NestedEnumCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyFilter<$PrismaModel> | $Enums.Currency
  }

  export type NestedEnumIncomeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeType | EnumIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeTypeFilter<$PrismaModel> | $Enums.IncomeType
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumIncomeFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeFrequency | EnumIncomeFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeFrequencyFilter<$PrismaModel> | $Enums.IncomeFrequency
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Currency | EnumCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Currency[] | ListEnumCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.Currency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCurrencyFilter<$PrismaModel>
  }

  export type NestedEnumIncomeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeType | EnumIncomeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeType[] | ListEnumIncomeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeTypeWithAggregatesFilter<$PrismaModel> | $Enums.IncomeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncomeTypeFilter<$PrismaModel>
    _max?: NestedEnumIncomeTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumIncomeFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IncomeFrequency | EnumIncomeFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.IncomeFrequency[] | ListEnumIncomeFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumIncomeFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.IncomeFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIncomeFrequencyFilter<$PrismaModel>
    _max?: NestedEnumIncomeFrequencyFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AccountType[] | ListEnumAccountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeFilter<$PrismaModel> | $Enums.InvestmentType
  }

  export type NestedEnumInvestmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentType | EnumInvestmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentType[] | ListEnumInvestmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentTypeFilter<$PrismaModel>
    _max?: NestedEnumInvestmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel = never> = {
    equals?: $Enums.BondFrequencyOfInterestPayments | EnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    in?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    not?: NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel> | $Enums.BondFrequencyOfInterestPayments
  }

  export type NestedEnumBondFrequencyOfInterestPaymentsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BondFrequencyOfInterestPayments | EnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    in?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    notIn?: $Enums.BondFrequencyOfInterestPayments[] | ListEnumBondFrequencyOfInterestPaymentsFieldRefInput<$PrismaModel>
    not?: NestedEnumBondFrequencyOfInterestPaymentsWithAggregatesFilter<$PrismaModel> | $Enums.BondFrequencyOfInterestPayments
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel>
    _max?: NestedEnumBondFrequencyOfInterestPaymentsFilter<$PrismaModel>
  }

  export type NestedEnumCryptoCurrencyFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCryptoCurrencyFilter<$PrismaModel> | $Enums.CryptoCurrency
  }

  export type NestedEnumCryptoCurrencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CryptoCurrency | EnumCryptoCurrencyFieldRefInput<$PrismaModel>
    in?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.CryptoCurrency[] | ListEnumCryptoCurrencyFieldRefInput<$PrismaModel>
    not?: NestedEnumCryptoCurrencyWithAggregatesFilter<$PrismaModel> | $Enums.CryptoCurrency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
    _max?: NestedEnumCryptoCurrencyFilter<$PrismaModel>
  }

  export type TermDepositCreateWithoutAccountInput = {
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    amountInvested?: number
    interestRate: number
    termInMonths: number
    startDate: Date | string
    endDate: Date | string
    taxRate?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermDepositUncheckedCreateWithoutAccountInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    amountInvested?: number
    interestRate: number
    termInMonths: number
    startDate: Date | string
    endDate: Date | string
    taxRate?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermDepositCreateOrConnectWithoutAccountInput = {
    where: TermDepositWhereUniqueInput
    create: XOR<TermDepositCreateWithoutAccountInput, TermDepositUncheckedCreateWithoutAccountInput>
  }

  export type TermDepositCreateManyAccountInputEnvelope = {
    data: TermDepositCreateManyAccountInput | TermDepositCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type BondCreateWithoutAccountInput = {
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee?: number | null
    taxRate?: number | null
    startDate: Date | string
    endDate: Date | string
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BondUncheckedCreateWithoutAccountInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee?: number | null
    taxRate?: number | null
    startDate: Date | string
    endDate: Date | string
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BondCreateOrConnectWithoutAccountInput = {
    where: BondWhereUniqueInput
    create: XOR<BondCreateWithoutAccountInput, BondUncheckedCreateWithoutAccountInput>
  }

  export type BondCreateManyAccountInputEnvelope = {
    data: BondCreateManyAccountInput | BondCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CryptoCreateWithoutAccountInput = {
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CryptoUncheckedCreateWithoutAccountInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CryptoCreateOrConnectWithoutAccountInput = {
    where: CryptoWhereUniqueInput
    create: XOR<CryptoCreateWithoutAccountInput, CryptoUncheckedCreateWithoutAccountInput>
  }

  export type CryptoCreateManyAccountInputEnvelope = {
    data: CryptoCreateManyAccountInput | CryptoCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type TermDepositUpsertWithWhereUniqueWithoutAccountInput = {
    where: TermDepositWhereUniqueInput
    update: XOR<TermDepositUpdateWithoutAccountInput, TermDepositUncheckedUpdateWithoutAccountInput>
    create: XOR<TermDepositCreateWithoutAccountInput, TermDepositUncheckedCreateWithoutAccountInput>
  }

  export type TermDepositUpdateWithWhereUniqueWithoutAccountInput = {
    where: TermDepositWhereUniqueInput
    data: XOR<TermDepositUpdateWithoutAccountInput, TermDepositUncheckedUpdateWithoutAccountInput>
  }

  export type TermDepositUpdateManyWithWhereWithoutAccountInput = {
    where: TermDepositScalarWhereInput
    data: XOR<TermDepositUpdateManyMutationInput, TermDepositUncheckedUpdateManyWithoutAccountInput>
  }

  export type TermDepositScalarWhereInput = {
    AND?: TermDepositScalarWhereInput | TermDepositScalarWhereInput[]
    OR?: TermDepositScalarWhereInput[]
    NOT?: TermDepositScalarWhereInput | TermDepositScalarWhereInput[]
    id?: IntFilter<"TermDeposit"> | number
    clerkId?: StringFilter<"TermDeposit"> | string
    accountId?: IntNullableFilter<"TermDeposit"> | number | null
    name?: StringFilter<"TermDeposit"> | string
    type?: EnumInvestmentTypeFilter<"TermDeposit"> | $Enums.InvestmentType
    currency?: EnumCurrencyFilter<"TermDeposit"> | $Enums.Currency
    institution?: StringNullableFilter<"TermDeposit"> | string | null
    amountInvested?: FloatFilter<"TermDeposit"> | number
    interestRate?: FloatFilter<"TermDeposit"> | number
    termInMonths?: IntFilter<"TermDeposit"> | number
    startDate?: DateTimeFilter<"TermDeposit"> | Date | string
    endDate?: DateTimeFilter<"TermDeposit"> | Date | string
    taxRate?: FloatNullableFilter<"TermDeposit"> | number | null
    isActive?: BoolFilter<"TermDeposit"> | boolean
    createdAt?: DateTimeFilter<"TermDeposit"> | Date | string
    updatedAt?: DateTimeFilter<"TermDeposit"> | Date | string
  }

  export type BondUpsertWithWhereUniqueWithoutAccountInput = {
    where: BondWhereUniqueInput
    update: XOR<BondUpdateWithoutAccountInput, BondUncheckedUpdateWithoutAccountInput>
    create: XOR<BondCreateWithoutAccountInput, BondUncheckedCreateWithoutAccountInput>
  }

  export type BondUpdateWithWhereUniqueWithoutAccountInput = {
    where: BondWhereUniqueInput
    data: XOR<BondUpdateWithoutAccountInput, BondUncheckedUpdateWithoutAccountInput>
  }

  export type BondUpdateManyWithWhereWithoutAccountInput = {
    where: BondScalarWhereInput
    data: XOR<BondUpdateManyMutationInput, BondUncheckedUpdateManyWithoutAccountInput>
  }

  export type BondScalarWhereInput = {
    AND?: BondScalarWhereInput | BondScalarWhereInput[]
    OR?: BondScalarWhereInput[]
    NOT?: BondScalarWhereInput | BondScalarWhereInput[]
    id?: IntFilter<"Bond"> | number
    clerkId?: StringFilter<"Bond"> | string
    accountId?: IntNullableFilter<"Bond"> | number | null
    name?: StringFilter<"Bond"> | string
    type?: EnumInvestmentTypeFilter<"Bond"> | $Enums.InvestmentType
    currency?: EnumCurrencyFilter<"Bond"> | $Enums.Currency
    institution?: StringNullableFilter<"Bond"> | string | null
    numberOfUnits?: IntFilter<"Bond"> | number
    unitPrice?: FloatFilter<"Bond"> | number
    interestRate?: FloatFilter<"Bond"> | number
    initialFee?: FloatNullableFilter<"Bond"> | number | null
    taxRate?: FloatNullableFilter<"Bond"> | number | null
    startDate?: DateTimeFilter<"Bond"> | Date | string
    endDate?: DateTimeFilter<"Bond"> | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFilter<"Bond"> | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFilter<"Bond"> | boolean
    createdAt?: DateTimeFilter<"Bond"> | Date | string
    updatedAt?: DateTimeFilter<"Bond"> | Date | string
  }

  export type CryptoUpsertWithWhereUniqueWithoutAccountInput = {
    where: CryptoWhereUniqueInput
    update: XOR<CryptoUpdateWithoutAccountInput, CryptoUncheckedUpdateWithoutAccountInput>
    create: XOR<CryptoCreateWithoutAccountInput, CryptoUncheckedCreateWithoutAccountInput>
  }

  export type CryptoUpdateWithWhereUniqueWithoutAccountInput = {
    where: CryptoWhereUniqueInput
    data: XOR<CryptoUpdateWithoutAccountInput, CryptoUncheckedUpdateWithoutAccountInput>
  }

  export type CryptoUpdateManyWithWhereWithoutAccountInput = {
    where: CryptoScalarWhereInput
    data: XOR<CryptoUpdateManyMutationInput, CryptoUncheckedUpdateManyWithoutAccountInput>
  }

  export type CryptoScalarWhereInput = {
    AND?: CryptoScalarWhereInput | CryptoScalarWhereInput[]
    OR?: CryptoScalarWhereInput[]
    NOT?: CryptoScalarWhereInput | CryptoScalarWhereInput[]
    id?: IntFilter<"Crypto"> | number
    clerkId?: StringFilter<"Crypto"> | string
    accountId?: IntNullableFilter<"Crypto"> | number | null
    name?: StringFilter<"Crypto"> | string
    type?: EnumInvestmentTypeFilter<"Crypto"> | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFilter<"Crypto"> | $Enums.CryptoCurrency
    amount?: FloatFilter<"Crypto"> | number
    isActive?: BoolFilter<"Crypto"> | boolean
    createdAt?: DateTimeFilter<"Crypto"> | Date | string
    updatedAt?: DateTimeFilter<"Crypto"> | Date | string
  }

  export type AccountCreateWithoutTermDepositInput = {
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bond?: BondCreateNestedManyWithoutAccountInput
    crypto?: CryptoCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutTermDepositInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    bond?: BondUncheckedCreateNestedManyWithoutAccountInput
    crypto?: CryptoUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutTermDepositInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTermDepositInput, AccountUncheckedCreateWithoutTermDepositInput>
  }

  export type AccountUpsertWithoutTermDepositInput = {
    update: XOR<AccountUpdateWithoutTermDepositInput, AccountUncheckedUpdateWithoutTermDepositInput>
    create: XOR<AccountCreateWithoutTermDepositInput, AccountUncheckedCreateWithoutTermDepositInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTermDepositInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTermDepositInput, AccountUncheckedUpdateWithoutTermDepositInput>
  }

  export type AccountUpdateWithoutTermDepositInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bond?: BondUpdateManyWithoutAccountNestedInput
    crypto?: CryptoUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTermDepositInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bond?: BondUncheckedUpdateManyWithoutAccountNestedInput
    crypto?: CryptoUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutBondInput = {
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termDeposit?: TermDepositCreateNestedManyWithoutAccountInput
    crypto?: CryptoCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutBondInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termDeposit?: TermDepositUncheckedCreateNestedManyWithoutAccountInput
    crypto?: CryptoUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutBondInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutBondInput, AccountUncheckedCreateWithoutBondInput>
  }

  export type AccountUpsertWithoutBondInput = {
    update: XOR<AccountUpdateWithoutBondInput, AccountUncheckedUpdateWithoutBondInput>
    create: XOR<AccountCreateWithoutBondInput, AccountUncheckedCreateWithoutBondInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutBondInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutBondInput, AccountUncheckedUpdateWithoutBondInput>
  }

  export type AccountUpdateWithoutBondInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termDeposit?: TermDepositUpdateManyWithoutAccountNestedInput
    crypto?: CryptoUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutBondInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termDeposit?: TermDepositUncheckedUpdateManyWithoutAccountNestedInput
    crypto?: CryptoUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateWithoutCryptoInput = {
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termDeposit?: TermDepositCreateNestedManyWithoutAccountInput
    bond?: BondCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutCryptoInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.AccountType
    balance?: number
    institution?: string | null
    accountNumber?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    termDeposit?: TermDepositUncheckedCreateNestedManyWithoutAccountInput
    bond?: BondUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutCryptoInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCryptoInput, AccountUncheckedCreateWithoutCryptoInput>
  }

  export type AccountUpsertWithoutCryptoInput = {
    update: XOR<AccountUpdateWithoutCryptoInput, AccountUncheckedUpdateWithoutCryptoInput>
    create: XOR<AccountCreateWithoutCryptoInput, AccountUncheckedCreateWithoutCryptoInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCryptoInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCryptoInput, AccountUncheckedUpdateWithoutCryptoInput>
  }

  export type AccountUpdateWithoutCryptoInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termDeposit?: TermDepositUpdateManyWithoutAccountNestedInput
    bond?: BondUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCryptoInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    balance?: FloatFieldUpdateOperationsInput | number
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    termDeposit?: TermDepositUncheckedUpdateManyWithoutAccountNestedInput
    bond?: BondUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type TermDepositCreateManyAccountInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    amountInvested?: number
    interestRate: number
    termInMonths: number
    startDate: Date | string
    endDate: Date | string
    taxRate?: number | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BondCreateManyAccountInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.Currency
    institution?: string | null
    numberOfUnits: number
    unitPrice: number
    interestRate: number
    initialFee?: number | null
    taxRate?: number | null
    startDate: Date | string
    endDate: Date | string
    frequencyOfInterestPayments: $Enums.BondFrequencyOfInterestPayments
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CryptoCreateManyAccountInput = {
    id?: number
    clerkId: string
    name: string
    type: $Enums.InvestmentType
    currency: $Enums.CryptoCurrency
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TermDepositUpdateWithoutAccountInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermDepositUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermDepositUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    amountInvested?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    termInMonths?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BondUpdateWithoutAccountInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BondUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BondUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCurrencyFieldUpdateOperationsInput | $Enums.Currency
    institution?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfUnits?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    interestRate?: FloatFieldUpdateOperationsInput | number
    initialFee?: NullableFloatFieldUpdateOperationsInput | number | null
    taxRate?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    frequencyOfInterestPayments?: EnumBondFrequencyOfInterestPaymentsFieldUpdateOperationsInput | $Enums.BondFrequencyOfInterestPayments
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoUpdateWithoutAccountInput = {
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    clerkId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumInvestmentTypeFieldUpdateOperationsInput | $Enums.InvestmentType
    currency?: EnumCryptoCurrencyFieldUpdateOperationsInput | $Enums.CryptoCurrency
    amount?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}